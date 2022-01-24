import { config } from "@config";
import {
  DataCorrectionService,
  KratesService,
} from "@features/data_correction_junior/services";

const DATA_NAMES = ["informations", "jobs", "users"];

export const dataCorrectionScript = async () => {
  const dataCorrectionService = new DataCorrectionService();

  for (const dataName of DATA_NAMES)
    await dataCorrectionService.importDataInput({ dataName });

  for (const dataName of DATA_NAMES)
    await dataCorrectionService.sanitizeData({ dataName });

  await dataCorrectionService.exportData();

  for (const dataName of DATA_NAMES)
    await dataCorrectionService.deleteDataInput({ dataName });

  const kratesService = new KratesService();

  // Specify to tests with jest to not push the data to Krates.
  if (config.env !== "test")
    kratesService.createUsers(
      require(`${config.data.dataCorrection.dirPath}/${config.data.dataCorrection.finalFileName}`)
    );
};
