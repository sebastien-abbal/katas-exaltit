import { config } from "@config";
import { BigParsingUser } from "@types";
import { createReadStream } from "fs";
import * as JSONStream from "JSONStream";

export class BigParsingService {
  async searchUserByID({ id }: { id: number }): Promise<BigParsingUser> {
    return new Promise((resolve, reject) => {
      const fileStream = createReadStream(
        config.data.bigParsing.dataInputEndpointPath
      );

      fileStream
        .pipe(JSONStream.parse("*"))
        .on("data", (data: BigParsingUser) => {
          if (data?.id === id) {
            resolve(data);
            fileStream.close();
          }
        })
        .on("error", (error) => reject(error))
        .on("end", () => resolve(null));
    });
  }
}
