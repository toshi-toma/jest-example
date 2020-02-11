const sum = require("../sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("two plus two is four", () => {
  expect(sum(2, 2)).toBe(4);
  describe("", () => {
    test("two plus two is four", () => {
      expect(sum(2, 2)).toBe(4);
    });
  });
});

describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3]
])(".add(%i, %i)", (a, b, expected) => {
  console.log(a, b, expected);
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});
