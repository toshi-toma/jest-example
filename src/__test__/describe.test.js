const log = s => {
  console.log(s);
};

describe("the test is in describe", () => {
  log("outer-a");
  describe("describe inner 1", () => {
    log("inner 1");
    test("test1", () => {
      log("test1");
      expect(true).toBeTruthy();
    });
  });
  log("outer-b");
});
