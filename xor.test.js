var xor = require("./xor");

test('Creates a repeating key XOR byte array with ICE of length 4', () => {
  var expected = new Uint8Array(['I'.charCodeAt(0), 'C'.charCodeAt(0)
                                , 'E'.charCodeAt(0), 'I'.charCodeAt(0)]);
  var actual = xor.createRepeatingKeyXorKey('ICE', 4);
  console.log("actual:   " + actual);
  console.log("expected: " + expected);
  expect(actual).toEqual(expected);
});
