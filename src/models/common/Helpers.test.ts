import { getEnumKeyByValue } from './Helpers';

describe('getEnumKeyByValue', () => {
  test('Should return the key of the value in the enum', () => {
    enum TestEnum {
      A = 'a',
      B = 'b',
      C = 'c',
    }
    expect(getEnumKeyByValue(TestEnum, 'a')).toBe('A');
    expect(getEnumKeyByValue(TestEnum, 'b')).toBe('B');
    expect(getEnumKeyByValue(TestEnum, 'c')).toBe('C');
  });
});
