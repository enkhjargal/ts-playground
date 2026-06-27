import { FullName } from "../src/fullName";
import { expect, test } from '@jest/globals';

test('format first_name and last_name to full_name', () => {
  // Type assertion
  const name = FullName as {
    new (first_name: string, last_name: string): FullName;
  };

  const author = new name("Jack", "Lakva");

  expect(author.toString()).toEqual('Jack Lakva');
})