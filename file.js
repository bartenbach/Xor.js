const fs = require('fs')
const xor = require('./xor')

// read the specified file and return the text as an array of bytes
module.exports = {
  readBytesFromFile : function (file, keyInput) {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      keyArray = xor.createRepeatingKeyXorKey(keyInput, data.length);
      result = xor.xorByteArrays(data, keyArray);
      console.log(result);
    })
  }
}
