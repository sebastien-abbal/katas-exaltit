import { config } from "@config";
import { DataFixed, DataItem } from "@types";
import { capitalize, numberToVowel } from "@utils";
import * as fs from "fs";
import * as https from "https";
import * as JSONStream from "JSONStream";

export class DataCorrectionService {
  public jsonSanitizeData: { [key: string]: DataItem };
  private jsonFixedData: { [key: string]: DataFixed };

  constructor() {
    this.jsonSanitizeData = {};
    this.jsonFixedData = {};
  }

  async importDataInput({ dataName }: { dataName: string }): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `https://recrutement-practice-default-rtdb.firebaseio.com/${dataName}.json`;
      const inputEndpointPath = `${config.data.dataCorrection.dirPath}/_${dataName}.json`;
      if (fs.existsSync(inputEndpointPath)) fs.unlinkSync(inputEndpointPath);

      https.get(url, (res) => {
        const fileStream = fs.createWriteStream(inputEndpointPath);
        res
          .pipe(fileStream)
          .on("error", (error) => reject(error))
          .on("finish", () => resolve());
      });
    });
  }

  async deleteDataInput({ dataName }: { dataName: string }): Promise<void> {
    const inputEndpointPath = `${config.data.dataCorrection.dirPath}/_${dataName}.json`;
    if (fs.existsSync(inputEndpointPath)) fs.unlinkSync(inputEndpointPath);
  }

  async exportData(): Promise<void> {
    fs.writeFileSync(
      `${config.data.dataCorrection.dirPath}/${config.data.dataCorrection.finalFileName}`,
      JSON.stringify(this.jsonSanitizeData)
    );
  }

  async sanitizeData({ dataName }: { dataName: string }): Promise<void> {
    const outputData = await this.streamData({ dataName });

    for (const [id, data] of Object.entries(outputData)) {
      const newData = {};
      for (const [key, value] of Object.entries(data)) {
        if (!(id in this.jsonFixedData)) this.jsonFixedData[id] = {};
        if (!(key in this.jsonFixedData[id])) {
          if (key === "name" && value !== "#ERROR") {
            newData[key] = value
              .toString()
              .split("-")
              .map((n: string) => capitalize(numberToVowel(n.toLowerCase())))
              .join("-");
          } else if (key === "city") {
            newData[key] = capitalize(value.toString().toLowerCase());
          } else if (key !== "name") {
            newData[key] = value;
          }

          if (
            (key === "name" && dataName === "users") ||
            (key === "age" && dataName === "informations")
          )
            this.jsonFixedData[id][key] = true;
        }

        this.jsonSanitizeData[id] = {
          ...this.jsonSanitizeData[id],
          ...newData,
        };
      }
    }
  }

  async streamData({ dataName }: { dataName: string }): Promise<object> {
    return new Promise((resolve, reject) => {
      const inputEndpointPath = `${config.data.dataCorrection.dirPath}/_${dataName}.json`;
      const data = {};

      const fileStream = fs.createReadStream(inputEndpointPath);

      fileStream
        .pipe(JSONStream.parse([{ emitKey: true }]))
        .on("data", ({ key, value }: { key: string; value: any }) => {
          data[key] = value;
        })
        .on("error", (error) => reject(error))
        .on("end", () => resolve(data));
    });
  }
}
