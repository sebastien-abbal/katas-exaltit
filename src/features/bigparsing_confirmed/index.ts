import { BigParsingService } from "@features/bigparsing_confirmed/services";

const bigParsingScript = async () => {
  const USER_ID = parseInt(process.argv.slice(2)[0]);

  if (USER_ID) {
    const bigParsingService = new BigParsingService();

    const user = await bigParsingService.searchUserByID({ id: USER_ID });

    if (user) {
      console.info(user.name);
    } else {
      console.warn("🆘 User not found !");
    }
  } else {
    console.warn("🆘 USER_ID not provided !");
  }

  process.exit();
};

bigParsingScript();
