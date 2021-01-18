const readline = require("readline")

// A class responsible for reading user input
// Returns a promise with the user input
class InputReader {
  constructor() {
    this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    this.rl.on("close", () => {
      process.exit(0)
    })
  }

  read = (message) => {
    return new Promise((resolve, reject) => {
      this.rl.question(message, userInput => {
        resolve(userInput)
      })
    })
  }

  close = () => {
    this.rl.close()
  }
}

module.exports = InputReader
