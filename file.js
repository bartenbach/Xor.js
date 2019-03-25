const fs = require('fs')
const xor = require('./byteutil')
const textEncoding = require('text-encoding');

// read the specified file and return the text as an array of bytes
module.exports = {
  readBytesFromFile : function (file, keyInput) {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      keyArray = xor.createRepeatingKeyXorKey(keyInput, data.length);
      result = xor.xorByteArrays(data, keyArray);
      var string = new TextDecoder("utf-8").decode(result);
      console.log(string);
    })
  }
}
