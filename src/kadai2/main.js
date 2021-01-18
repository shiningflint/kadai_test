const InputReader = require("../InputReader")
const Performance = require("../Performance")
const Prime = require("./Prime")

const kadai = (n, m) => {
  const prime = new Prime()
  const primeStrings = prime.generatePrimeStrings(n, m)
  const result = prime.filterPalindrome(primeStrings)

  for (let s of result) {
    console.log(s)
  }
}

const main = () => {
  const inputReader = new InputReader()
  const perf = new Performance()

  let n = null
  let m = null

  inputReader.read("Max prime number: ")
  .then(userInputn => {
    n = userInputn
    return inputReader.read("Number base: ")
  })
  .then(userInputm=> {
    m = userInputm

    perf.start()
    kadai(n, m)
    perf.logElapsedPerformance("Kadai done in: ")

    inputReader.close()
  })
  .catch(err => {
    console.error("Something is wrong: ", err)
  })
}


main()
