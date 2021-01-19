class Performance {
  constructor() {
    this.timeStart = null
    this.memoryUsageStart = null
    this.memoryUsageEnd = null
  }

  start = () => {
    this.memoryUsageStart = process.memoryUsage()
    console.time("process")
  }

  logElapsedPerformance = (note) => {
    console.log("\n")
    console.timeEnd("process")
    this.memoryUsageEnd = process.memoryUsage()
    this._printMemoryDifference()
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
