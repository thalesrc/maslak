const DataTransform = require("./../lib/main");

const testCase1 = {
  data2: "value2",
  data1: "value1",
  data3: 3
};

const testCase1ShouldBe = [
  {
    key: "data2",
    value: "value2"
  },
  {
    key: "data1",
    value: "value1"
  },
  {
    key: "data3",
    value: 3
  }
];

const testCase2ShouldBe = [
  {
    key: "data3",
    value: 3
  },
  {
    key: "data1",
    value: "value1"
  },
  {
    key: "data2",
    value: "value2"
  }
];

test("Object attribute will be transform into key and value.", () => {
  const transform = new DataTransform(testCase1).result;
  expect(transform).toEqual(testCase1ShouldBe);
});

test("Key and Value Objects will be sorted according to the given array.", () => {
  const transform = new DataTransform(testCase1).dataSort([
    "data3",
    "data1",
    "data2"
  ]).result;
  expect(transform).toEqual(testCase2ShouldBe);
});
