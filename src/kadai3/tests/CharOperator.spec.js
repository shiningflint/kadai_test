const CharOperator = require("../CharOperator")

test("Generate array of operations", () => {
  const charOperator = new CharOperator()

  // "ab" -> "cd"
  const output1 = [
    "replace : a -> c",
    "replace : b -> d",
    "cost: 2",
  ]
  // "abc" -> "defg"
  const output2 = [
    "replace : a -> d",
    "replace : b -> e",
    "replace : c -> f",
    "insert: g",
    "cost: 5",
  ]
  // "abc" -> "abcx"
  const output3 = [
    "insert: x",
    "cost: 2",
  ]
  // "ghi" -> "a"
  const output4 = [
    "replace : g -> a",
    "erase: h",
    "erase: i",
    "cost: 7",
  ]

  expect(charOperator.run("ab", "cd")).toStrictEqual(output1)
  expect(charOperator.run("abc", "defg")).toStrictEqual(output2)
  expect(charOperator.run("abc", "abcx")).toStrictEqual(output3)
  expect(charOperator.run("ghi", "a")).toStrictEqual(output4)
})
