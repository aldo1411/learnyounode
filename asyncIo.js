const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function(err, fileContents) {
	if (err) console.log(err)
	console.log(fileContents.split('\n').length -1)
})