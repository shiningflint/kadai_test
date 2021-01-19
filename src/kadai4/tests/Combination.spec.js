const Combination = require("../Combination")

test("Generate array of combinations", () => {
  const combination = new Combination()

  const output1 = ["2+643", "2+6+43", "26+4+3", "264+3", "26+43", "2+64+3", "2643", "2+6+4+3"]
  const output2 = 3792 // これは正しいの答えです。

  expect(combination.allCombinations("2643")).toStrictEqual(output1)
  expect(combination.combinationSum(output1)).toBe(output2)
})
