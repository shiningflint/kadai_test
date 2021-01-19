class PiGen {
  constructor(stringPattern) {
    this.digits = [
      () => (10n ** 120n), // hundred
      () => (10n ** 1020n), // thousand
      () => (10n ** 10020n), // tenThousand
      () => (10n ** 50020n), // fiftyThousand
      () => (10n ** 100020n) // hundredThousand
    ]
    this.indexOne = null
    this.indexTwo = null
    this.stringPattern = stringPattern
    this.reversePattern = null
  }

  // Generate Pi, return BigInt
  // convert to string and regex pattern match it
  run = () => {
    this.reversePattern = this.stringPattern.split("").reverse().join("")

    this.indexOne = this._runMain(this.stringPattern)
    this.indexTwo = this._runMain(this.reversePattern)
  }

  // private

  _runMain = (stringPattern) => {
    for(let d of this.digits) {
      const piNum = this._piGen(d())
      const result = this._findMatchIndex(stringPattern, piNum.toString())
      if (result) {
        return result
      }
    }
  }

  // Generate number of Pi digits
  // input is BigInt to request number of digits
  // return is BigInt calculated pi value
  _piGen = (numberOfDigits) => {
    let i = 1n
    let x = 3n * numberOfDigits
    let pi = x
    while (x > 0) {
            x = x * i / ((i + 1n) * 4n)
            pi += x / (i + 2n)
            i += 2n
    }
    return pi / (10n ** 20n)
  }

  _findMatchIndex(stringPattern, piNum) {
    const pattern = new RegExp(stringPattern, 'g')
    const match = pattern.exec(piNum)

    if (match) {
      return match.index
    } else {
      return null
    }
  }
}

module.exports = PiGen
