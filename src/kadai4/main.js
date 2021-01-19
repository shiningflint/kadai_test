const InputReader = require("../InputReader")
const Performance = require("../Performance")
const Combination = require("./Combination")

const kadai = (s) => {
  const combination = new Combination()

  const result = combination.run(s)

  console.log(result)
  console.log("\n")
}

const main = () => {
  const inputReader = new InputReader()
  const perf = new Performance()

  let s = null

  inputReader.read("文字: ")
  .then(userInput => {
    s = userInput

    perf.start()
    kadai(s)
    perf.logElapsedPerformance("Kadai done in: ")

    inputReader.close()
  })
  .catch(err => {
    console.error("Something is wrong: ", err)
  })
}

main()
