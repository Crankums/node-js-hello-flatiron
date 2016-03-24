module.exports = goodbye => {
  goodbye.hello = (text, callback) => {
    if (!callback) {
      callback = console.log
    }

    callback((text || 'Hello, Flatiron!').split('').join('-'))
  }
}
