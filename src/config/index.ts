import { config as dotenvConfig } from "dotenv";
import * as env from "env-var";
import * as path from "path";

dotenvConfig();

const rootPath = path.resolve(
  `${__dirname}${__dirname.includes("dist/") ? "/../../../" : "/../../"}`
);

export const config = {
  rootPath,
  env: env.get("NODE_ENV").default("dev").asString(),
  db: {
    kratesID: env.get("KRATES_ID").asString(),
    kratesUrlEndpoint: `https://krat.es/${env.get("KRATES_ID").asString()}`,
    collectionName: "users",
    maxChunkSize: 10,
  },
  data: {
    bigParsing: {
      dataInputEndpointPath: `${rootPath}/data/bigparsing_confirmed/input.json`,
    },
    dataCorrection: {
      finalFileName: "final.json",
      dirPath: `${rootPath}/data/data_correction_junior`,
    },
  },
};
