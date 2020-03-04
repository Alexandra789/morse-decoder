1111111111111111
const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    expr.match(/.{1,10}/g).forEach(function(arr) {
        let morse = '';
        for (let i = 0; i < 10; i++) {
            if (arr[i] == 0) {
                continue;
            } else if (arr[i] == 1 && arr[i + 1] == 0) {
                morse += '.';
                i++;
            } else if (arr[i] == 1 && arr[i + 1] == 1) {
                morse += '-';
                i++;
            }
            if (arr[i] == '*') {
                result += ' ';
                break;
            }
        }

        Object.entries(MORSE_TABLE).forEach(([key, value]) => {
            if (morse == key) {
                result += value;
            }
        });
    });
    return result;
}
module.exports = {
    decode
}