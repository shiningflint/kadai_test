class Combination {
  run = (str) => {
    const combinations = this.allCombinations(str)
    return this.combinationSum(combinations)
  }

  allCombinations = (str) => {
    return this._allCombinations(str.split(""))
  }

  combinationSum = (L) => {
    const result = L.map(l => {
      const number = l
        .split("+")
        .map(m => parseInt(m))
        .reduce((x, y) => x + y)
      return number
    })

    return result.reduce((x, y) => x + y)
  }

  // private

  _allCombinations = (L) => {
    const result = []

    for (var i = 0; i < L.length; i++) {
      for (var j = 0; j < (L.length - i); j++) {
        const fromIndex = j
        const toIndex = i + j + 1
        const value = L.slice(fromIndex, toIndex)
        const remainingFrom = L.slice(0, fromIndex).join("")
        const remainingTo = L.slice(toIndex, L.length).join("")

        const subResult = []
        if (remainingFrom) subResult.push(remainingFrom)
        subResult.push(value.join(""))
        if (remainingTo) subResult.push(remainingTo)

        result.push(subResult.join("+"))
      }
    }

    result.push(L.join("+"))

    return this._uniq(result)
  }

  _uniq = (a) => {
    var seen = {}
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true)
    })
  }
}

module.exports = Combination
