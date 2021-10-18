const path = require('path')

console.log(path.delimiter)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
console.log(path.dirname(filePath))
console.log(path.basename(filePath))
console.log(path.extname(filePath))

console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt'))
