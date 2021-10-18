// Modules
const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavour')

require('./7-mind-grenade')

names.forEach(name => sayHi(name))

sayHi(data.singlePerson.name)
console.log(data.items[1])
