const fs = require('fs')
const path = require('path')

module.exports = (dir, ext, callback) => {

	fs.readdir(dir, (err, dirContents) => {
		if (err) return callback(err)

		dirContents = dirContents.filter((file) => {
			return path.extname(file) === '.' + ext
		})

		callback(null, dirContents)
	})

}