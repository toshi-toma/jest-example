const axios = require("axios");
const Users = require("../user");

jest.mock("axios");

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
test("mock test", () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);
  forEach([2, 3], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(4);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

test("mock value", () => {
  const myMock = jest.fn();
  myMock
    .mockReturnValue(true)
    .mockReturnValueOnce(10)
    .mockReturnValueOnce("x");

  expect(myMock()).toBe(10);
  expect(myMock()).toBe("x");
  expect(myMock()).toBeTruthy();
  expect(myMock()).toBeTruthy();
});

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);
  return Users.all().then(data => expect(data).toEqual(users));
});

test("should fetch users2", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockImplementation(() => Promise.resolve(resp));
  return Users.all().then(data => expect(data).toEqual(users));
});
