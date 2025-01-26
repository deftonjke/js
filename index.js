const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`Enter valid number, string or numeric array(format: 1,2,3,4):\n`, input => {
    console.log('~~~~~~~~~~~~~~~~')
    console.log('Output:', checkInput(convertType(input)))
    console.log('~~~~~~~~~~~~~~~~')
    rl.close();
});

function convertType(data) {
    let result = data;
    const parsedArray = data.split(',');

    if (!isNaN(+data)) {
        result = +data
    } else if (parsedArray.length > 1) {
        result = parsedArray.map(n => isNaN(+n) ? n : +n);
    }

    return result
}

function checkInput(data) {
    let result;

    switch (typeof data) {
        case 'object':
            if (Array.isArray(data) && data.every(x => typeof x === 'number')) {
                result = data.filter(num => num % 3 === 0);
            }
            break;
        case 'number':
            if (data > 7) {
                result = 'Hello';
            }
            break;
        case 'string':
            result = data === 'John' ? 'Hello, John' : 'There is no such name';
    }

    return result;
}
