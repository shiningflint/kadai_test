class Performance {
  constructor() {
    this.timeStart = null
    this.memoryUsageStart = null
    this.memoryUsageEnd = null
  }

  start = () => {
    this.memoryUsageStart = process.memoryUsage()
    this.timeStart = process.hrtime()
  }

  logElapsedPerformance = (note) => {
    const precision = 3 // 3 decimal places
    const elapsed = process.hrtime(this.timeStart)[1] / 1000000 // divide by a million to get nano to milli
    console.log(note + elapsed.toFixed(precision) + " ms")
    this.memoryUsageEnd = process.memoryUsage()
    this._printMemoryDifference()
    this.timeStart = process.hrtime() // reset the timer
  }

  // private

  _printMemoryDifference = () => {
    const result = {
      rss: this.memoryUsageEnd['rss'] - this.memoryUsageStart['rss'],
      heapTotal: this.memoryUsageEnd['heapTotal'] - this.memoryUsageStart['heapTotal'],
      heapUsed: this.memoryUsageEnd['heapUsed'] - this.memoryUsageStart['heapUsed'],
      external: this.memoryUsageEnd['external'] - this.memoryUsageStart['external'],
      arrayBuffers: this.memoryUsageEnd['arrayBuffers'] - this.memoryUsageStart['arrayBuffers'],
    }
    console.log('memory difference')
    console.log(result)
  }
}

module.exports = Performance
