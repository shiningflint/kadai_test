const InputReader = require("../InputReader")
const Performance = require("../Performance")
const CharOperator = require("./CharOperator")

const kadai = (s, t) => {
  const charOperator = new CharOperator()

  const result = charOperator.run(s, t)

  console.log("\n")
  for (let s of result) {
    console.log(s)
  }
  console.log("\n")
}

const main = () => {
  const inputReader = new InputReader()
  const perf = new Performance()

  inputReader.read("文字列 S: ")
  .then(userInputn => {
    s = userInputn
    return inputReader.read("文字列 T: ")
  })
  .then(userInputm=> {
    t = userInputm

    perf.start()
    kadai(s, t)
    perf.logElapsedPerformance("Kadai done in: ")

    inputReader.close()
  })
  .catch(err => {
    console.error("Something is wrong: ", err)
  })
}

main()
