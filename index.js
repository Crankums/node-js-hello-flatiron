module.exports = (text, callback) => {
  if (!callback) {
    callback = console.log
  }

  callback((text || 'Hello, Flatiron!').split('').join('-'))
}
