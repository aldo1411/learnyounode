const mod = require('./mod')

const dir = process.argv[2]
const ext = process.argv[3]

mod(dir, ext, (err, dirContents) => {
	if (err) return callback(err)

	dirContents.forEach(function(file) {
		console.log(file)
	})
}) 