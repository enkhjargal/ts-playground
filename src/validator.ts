export type Validator = (name: string) => boolean;

export function createValidator() {
  return (name: string) => name.length > 2;
}