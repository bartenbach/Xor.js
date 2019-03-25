module.exports = {
  // creates a repeating key xor array of bytes using the specified size
  createRepeatingKeyXorKey : function(key, size) {
    var repeatingKey = new Uint8Array(size);
    var j = 0;
    for (var i = 0; i < repeatingKey.length; i++) {
      repeatingKey[i] = key[j].charCodeAt(0);
      if (j == key.length - 1) {
        j = 0;
      } else {
        j++;
      }
    }
    return repeatingKey;
  },
  
  // performs an XOR on two byte arrays and returns the result.
  // throws an error if the sizes are different. 
  xorByteArrays : function(data, key) {
    if (data.length != key.length) {
      throw new Error("Cannot XOR arrays: mismatched lengths: data:"
          + data.length + " and key:" + key.length);
    }
    var result = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) {
      result[i] = data[i] ^ key[i]    
    }
    return result; 
  }
};
