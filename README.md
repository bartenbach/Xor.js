# Xor.js
A simple console app written in javascript to encrypt things with repeating key XOR.

## example
    ./xor.js --file data.txt --key ICE

This will encrypt the text in data.txt under the repeating key XOR ICE.

We can redirect this output into an encrypted file as so:
    ./xor.js --file data.txt --key ICE >> encrypted.txt

Then, only the person with the key can decrypt it, using much the same operation:
    ./xor.js --file encrypted.txt --key ICE
