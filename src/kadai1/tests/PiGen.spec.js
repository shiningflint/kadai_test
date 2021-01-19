const PiGen = require("../PiGen")

test("Pattern match with correct index", () => {
  const piGen = new PiGen("2643")

  piGen.run()

  expect(piGen.indexOne).toBe(21)
  expect(piGen.indexTwo).toBe(7546)
})

test("Pattern match with correct index big one", () => {
  const piGen = new PiGen("12345")

  piGen.run()

  expect(piGen.indexOne).toBe(49702)
  expect(piGen.indexTwo).toBe(64224)
})
