const InputReader = require("../InputReader")
const Performance = require("../Performance")
const PiGen = require("./PiGen")

const kadai = (userInput) => {
  const piGen = new PiGen(userInput)

  piGen.run()

  console.log(`${piGen.stringPattern} = ${piGen.indexOne}`)
  console.log(`${piGen.reversePattern} = ${piGen.indexTwo}`)
}

const main = () => {
  const inputReader = new InputReader()
  const perf = new Performance()

  let n = null
  let m = null

  inputReader.read("円周率パターン: ")
  .then(userInput => {
    n = userInput

    perf.start()
    kadai(n)
    perf.logElapsedPerformance("Kadai done in: ")

    inputReader.close()
  })
  .catch(err => {
    console.error("Something is wrong: ", err)
  })
}


main()
