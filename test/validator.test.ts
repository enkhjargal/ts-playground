import { expect, test } from "@jest/globals";
import { createValidator } from "../src/validator";

test('validates person name length', () => {
  const validator = createValidator();

  expect(validator('Ja')).toBe(false);
  expect(validator('Jack')).toBe(true);
});