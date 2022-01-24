import { BigParsingService } from "@features/bigparsing_confirmed/services";

describe("Big parsing confirmed", () => {
  jest.setTimeout(15000);

  it("should returns an user", async () => {
    const bigParsingService = new BigParsingService();
    const user = await bigParsingService.searchUserByID({ id: 62359 });

    expect(user.name).toEqual("Damon Jerde");
  });
});
