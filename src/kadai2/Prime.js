// class responsible for handling prime numbers
class Prime {

  // Generate a list of prime number in strings
  // input: max number and base number with default radix of 10
  // return: list of strings ["2", "3", "5"]
  generatePrimeStrings = (n, base = "10") => {
    const primeNumbers = []
    const baseInt = parseInt(base, 10)
    const numberInt = parseInt(n, baseInt)

    // using classic for method for performance
    for (let i = 2; i <= numberInt; i++) {
      if (this._isPrime(i)) {
        primeNumbers.push(i)
      }
    }

    const result = primeNumbers.map(n => n.toString(baseInt))

    return result
  }

  // Filter palindrome string
  // input list of strings
  // return list of strings
  filterPalindrome = (strings) => {
    return strings.filter(this._isPalindrome)
  }

  // private

  _isPrime = (n) => {
    for ( var i = 2; i < n; i++ ) {
        if ( n % i === 0 ) {
            return false
        }
    }

    return true
  }

  _isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
      const singleDigit = str.length === 1
      const notPalindrome = str[i] !== str[str.length - 1 - i]

      if (singleDigit || notPalindrome) {
        return false
      }
    }

    return true
  }
}

module.exports = Prime
