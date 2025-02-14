

const RomanToInteger = () => {
    let roman = 'MCMXCIV';
    let romanArray = roman.split('');
    let romanObject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for (let i = 0; i < romanArray.length; i++) {
        if (romanObject[romanArray[i]] < romanObject[romanArray[i + 1]]) {
            result += romanObject[romanArray[i + 1]] - romanObject[romanArray[i]];
            i++;
        } else {
            result += romanObject[romanArray[i]];
        }
    }
    return result;
}

console.log(RomanToInteger());