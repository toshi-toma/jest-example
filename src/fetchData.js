const fetchData = async st => {
  if (st === "error") {
    throw new Error("error");
  }
  return [1, 2, 3];
};

module.exports = fetchData;
