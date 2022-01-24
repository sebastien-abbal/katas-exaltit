import { config } from "@config";
import { dataCorrectionScript } from "@features/data_correction_junior";
import * as fs from "fs";

describe("Data correction junior", () => {
  beforeEach(async () => await dataCorrectionScript());

  it("should final json file exists", () => {
    expect(
      fs.existsSync(
        `${config.data.dataCorrection.dirPath}/${config.data.dataCorrection.finalFileName}`
      )
    ).toBeTruthy();
  });

  it("should sanitized json match with expected results", async () => {
    const jsonResults = require(`${config.data.dataCorrection.dirPath}/${config.data.dataCorrection.finalFileName}`);
    const expectedJsonResults = require(`${config.data.dataCorrection.dirPath}/results.json`);
    expect(jsonResults).toEqual(expect.objectContaining(expectedJsonResults));
  });
});
