class CharOperator {
  constructor() {
    this.result = []
    this.cost = 0
  }

  run = (s, t) => {
    this._resetValues()

    const listS = s.split("")
    const listT = t.split("")

    if (listS.length > listT.length) {
      this._processValuesInverse(listS, listT)
    } else {
      this._processValues(listS, listT)
    }

    this.result.push(`cost: ${this.cost}`)

    return this.result
  }

  // private

  _resetValues = () => {
    this.result = []
    this.cost = 0
  }

  _processValues = (listS, listT) => {
    for (let i = 0; i < listT.length; i++) {
      const needsReplace = listS[i] !== listT[i]
      const needsInsert = listS[i] === undefined

      if (needsInsert) {
        this._insert(listT[i])
      } else if (needsReplace) {
        this._replace(listS[i], listT[i])
      }
    }
  }

  _processValuesInverse = (listS, listT) => {
    for (let i = 0; i < listS.length; i++) {
      const needsReplace = listS[i] !== listT[i]
      const needsErase = listT[i] === undefined

      if (needsErase) {
        this._erase(listS[i])
      } else if (needsReplace) {
        this._replace(listS[i], listT[i])
      }
    }
  }

  _replace = (cs, ct) => {
    this.result.push(`replace : ${cs} -> ${ct}`)
    this.cost += 1
  }

  _insert = (ct) => {
    this.result.push(`insert: ${ct}`)
    this.cost += 2
  }

  _erase = (cs) => {
    this.result.push(`erase: ${cs}`)
    this.cost += 3
  }
}

module.exports = CharOperator
