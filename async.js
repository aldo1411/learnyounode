const http = require('http')
const bl = require('bl')
let res = []
let count = 0

const results = () => {
    for(i = 0; i < 3; i++) {
        console.log(res[i])
    }
}

const content = (e) => {
    http.get(process.argv[2 + e],(response) => {  
        response.pipe(bl((err, data) => {        
            if (err) return callback(err)
            res[e] = data.toString()
            count++
            if(count == 3) {
              results()
            }
        }))
    })
}
    
for(i = 0; i < 3; i++) {
    content(i)
}