const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)
console.log(`The system has been up for ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS)
console.log(currentOS.totalMem)
console.log(currentOS.totalMem - currentOS.freeMem)
