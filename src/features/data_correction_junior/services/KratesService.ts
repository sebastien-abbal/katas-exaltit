import { config } from "@config";
import { BigParsingUser } from "@types";
import { chunkArray } from "@utils";
import axios from "axios";

export class KratesService {
  async createUsers(data: { [key: string]: BigParsingUser }) {
    const users = Object.entries(data).map(([_id, user]) => ({
      _id,
      ...user,
    }));

    for (const chunkedUsers of chunkArray(users, config.db.maxChunkSize)) {
      await axios({
        method: "post",
        url: `${config.db.kratesUrlEndpoint}/${config.db.collectionName}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: chunkedUsers,
      }).catch((err) =>
        console.error(
          err?.response?.data ? err.response.data.message : err.message
        )
      );
    }
  }
}
