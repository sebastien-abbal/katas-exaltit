import { chunkArray } from "@utils";

describe("Utils (Array)", () => {
  describe("chunkArray function", () => {
    const arrayToChunk = ["a", "b", "c", "d", "e", "f", "g"];

    it("should respond an array to multiple arrays by modulo 3", () => {
      const result = [["a", "b", "c"], ["d", "e", "f"], ["g"]];
      expect(chunkArray(arrayToChunk, 3)).toEqual(result);
    });

    it("should respond an array to multiple arrays by modulo 4", () => {
      const result = [
        ["a", "b", "c", "d"],
        ["e", "f", "g"],
      ];
      expect(chunkArray(arrayToChunk, 4)).toEqual(result);
    });
  });
});
