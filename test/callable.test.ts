import { expect, test } from "@jest/globals";
import { invokeCallback } from "../src/callable";

test('check if function is invoked', () => {
  const logger = () => true;
  expect(invokeCallback(logger)).toBe(true);
});