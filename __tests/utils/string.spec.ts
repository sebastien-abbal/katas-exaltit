import { capitalize, numberToVowel } from '@utils';

describe('Utils (String)', () => {
  describe('capitalize function', () => {
    const text1 = 'DOBBY';
    const text2 = 'dobby';

    it('should respond a text capitalized', () => {
      expect(capitalize(text1)).toBe('DOBBY');
      expect(capitalize(text2)).toBe('Dobby');
    });
  });

  describe('numberToVowel function', () => {
    const text1 = 'L43t1t14';
    const text2 = 'Qu3nt1n';

    it('should respond a text capitalized', () => {
      expect(numberToVowel(text1)).toBe('Laetitia');
      expect(numberToVowel(text2)).toBe('Quentin');
    });
  });
});
