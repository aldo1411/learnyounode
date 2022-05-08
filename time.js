const net = require('net') 
const port = process.argv[2]
 
const server = net.createServer((socket) => {  
    socket.end(date() + '\n') 
})  

server.listen(port) 
 
const zeroFill = (i) => (i < 10 ? '0' : '') + i

const date = () => {
     var date = new Date()
     return `${date.getFullYear()}-${zeroFill(date.getMonth() + 1)}-${zeroFill(date.getDate())} ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}`
}