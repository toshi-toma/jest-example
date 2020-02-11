const fetchData = require("../fetchData");

// Callback
test("the data is [1, 2, 3]", done => {
  function callback(data) {
    try {
      expect(data).toEqual([1, 2, 3]);
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData().then(data => callback(data));
});

// Promise
test("the data is [1, 2, 3]", () => {
  return fetchData().then(data => {
    expect(data).toEqual([1, 2, 3]);
  });
});
test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData("error").catch(e => expect(e).toEqual(new Error("error")));
});
test("the data is [1, 2, 3]", () => {
  return expect(fetchData()).resolves.toEqual([1, 2, 3]);
});
test("the fetch fails with an error", () => {
  return expect(fetchData("error")).rejects.toEqual(new Error("error"));
});

// Async/Await
test("the data is [1, 2, 3]", async () => {
  const data = await fetchData();
  expect(data).toEqual([1, 2, 3]);
});

test.todo("the fetch fails with an error");
