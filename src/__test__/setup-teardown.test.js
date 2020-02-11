const log = s => {
  console.log(s);
};

const isCity = v => v === "city";

beforeEach(() => {
  log("beforeEach");
});

afterEach(() => {
  log("afterEach");
});

beforeAll(() => {
  return log("beforeAll");
});

afterAll(() => {
  return log("afterAll");
});

test("city database has Vienna", () => {
  expect(isCity("city")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeFalsy();
});

describe("the test is in describe", () => {
  beforeEach(() => {
    log("beforeEach in describe");
  });
  test("city database has Vienna", () => {
    expect(isCity("city")).toBeTruthy();
  });
});
