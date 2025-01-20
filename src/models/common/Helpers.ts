// Constructor type is used to define constructor mixins.
export type Constructor<T = {}> = new (...args: any[]) => T;

// Function to perform reverse lookup
export function getEnumKeyByValue(
  enumObj: any,
  value: string
): string | undefined {
  return Object.keys(enumObj).find((key) => enumObj[key] === value);
}
