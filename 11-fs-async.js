const { readFile, writeFile } = require('fs')
console.log('Start')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/fourth.txt',
      (first + ' ' + second).toUpperCase(),
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Done')
      }
    )
  })
})
console.log('Starting the next one.')
