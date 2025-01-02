import { codedMessage } from './codedMessage.js';

/*
codedMessage.js holds a coded message (well, the name makes it obvious, huh?).

**Task**
- Decode the message!

key.md will help!

**Stretch Goal**
No stretch goal for the final day. Just stretch your legs!
*/

// Example codedMessage (binary string)
const codedMessage = "0100100001100101011011000110110001101111"; // "Hello" in binary

function decodeBinaryMessage(binaryStr) {
    let decodedMessage = '';

    // Split the binary string into chunks of 8 bits (1 byte)
    for (let i = 0; i < binaryStr.length; i += 8) {
        const byte = binaryStr.slice(i, i + 8);
        const decimal = parseInt(byte, 2);
        const char = String.fromCharCode(decimal);
        decodedMessage += char;
    }

    return decodedMessage;
}

console.log(decodeBinaryMessage(codedMessage)); // Should output the decoded message