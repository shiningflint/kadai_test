const Prime = require("../Prime")

test("Generates correct prime numbers", () => {
  const prime = new Prime()
  const primeBaseTen = [ "2", "3", "5", "7", "11", "13", "17", "19", "23", "29" ]
  const primeBaseFour = [ "2", "3", "11", "13", "23", "31"]
  const primeBaseEight = [ "2", "3", "5", "7", "13", "15", "21", "23", "27", "35", "37", "45", "51", "53", "57", "65", "73", "75", "103", "107", "111", "117", "123", "131", "141", "145", "147", "153", "155", "161", "177" ]

  expect(prime.generatePrimeStrings("30", "10")).toStrictEqual(primeBaseTen)
  expect(prime.generatePrimeStrings("32", "4")).toStrictEqual(primeBaseFour)
  expect(prime.generatePrimeStrings("200", "8")).toStrictEqual(primeBaseEight)
})

test("isPalindrome", () => {
  const prime = new Prime()
  const input = ["bed", "beb", "145", "131"]
  const output = ["beb", "131"]

  expect(prime.filterPalindrome(input)).toStrictEqual(output)
})

test("Prime Palindrome check", () => {
  const prime = new Prime()
  const output = ["111", "131", "141", "161"]
  const main = () => {
    const primeStrings = prime.generatePrimeStrings("200", "8")
    return prime.filterPalindrome(primeStrings)
  }

  expect(main()).toStrictEqual(output)
})
