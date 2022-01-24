import { BigParsingService } from "@features/bigparsing_confirmed/services";

describe("Big parsing confirmed", () => {
  jest.setTimeout(20000);

  const bigParsingService = new BigParsingService();

  it("should return an user", async () => {
    const user = await bigParsingService.searchUserByID({ id: 62359 });
    expect(user.name).toEqual("Damon Jerde");
  });

  it("should return user not found with null", async () => {
    const user = await bigParsingService.searchUserByID({ id: 1234567890 });
    expect(user).toBeNull();
  });
});
