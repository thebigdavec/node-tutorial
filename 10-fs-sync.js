const { readFileSync, writeFileSync } = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log({ first, second })

writeFileSync('./content/third.txt', 'This here is the third file!!', {
  flag: 'a'
})
console.log('Done with this task')
console.log('Starting the next task')
