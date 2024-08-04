import { convertCentToEuro } from '@/helpers/monetaryUnitConverter';
import { describe, expect, it } from 'vitest';

describe('MonetaryUnitConverter', () => {
  const testCases = [
    { input: 1234567890, expectedOutput: '12.345.678,90€' },
    { input: 0, expectedOutput: '0,00€' },
    { input: -12, expectedOutput: '-0,12€' },
  ];
  testCases.forEach((testCase) => {
    it('should convert Cents to readable Euro', () => {
      const euro = convertCentToEuro(testCase.input);
      expect(euro).toBe(testCase.expectedOutput);
    });
  });
});
