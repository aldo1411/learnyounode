const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], function(err, dir) {
	if (err) console.log(err)
	for (i = 0; i < dir.length; i++) {
		if (path.extname(dir[i]) === '.' + process.argv[3]) {
			console.log(dir[i])
		}
	}
})