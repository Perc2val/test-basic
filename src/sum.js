

function capitalize(x){
    return x.toUpperCase();
}

function reverseString(x){
    return x.split("").reverse().join("");
}

const calculator = {
    sum(a, b){
        return a + b
    },
    substract(a, b){
        return a - b
    },
    multiply(a, b){
        return a * b
    },
    divide(a, b){
        return a / b
    }
}

function ceasarCipher(x, y){
    const regex = /[a-zA-Z]/;
    const regexNumber = /[0-9]/;
    const numbers = [];
    const numbersTwo = [];
    const ceasarArray = [];
    const ceasarArrayTwo = [];
    x
    .split("")
    .forEach(element => {
        if (element.match(regex)){
            let x = element.charCodeAt(0)
            numbers.push(x)
        } else {
            numbers.push(element)
        }
        
    });
    numbers
    .forEach(element=> {
        let k = element.toString();
        if (k.match(regexNumber)){
            let x = element + y
            numbersTwo.push(x)
        } else {
            numbersTwo.push(element)
        }
        
    })
    numbersTwo
    .forEach(element => {
        let k = element.toString()
        if (k.match(regexNumber) && element < 122){
            ceasarArray.push(element)
        } else if(k.match(regexNumber)){
            let x = element - 26;
            ceasarArray.push(x)
        } else {
            ceasarArray.push(element)
        }
    })
    ceasarArray
    .forEach(element => {
        let k = element.toString()
        if(k.match(regexNumber)){
            let x = String.fromCharCode(k);
            ceasarArrayTwo.push(x)
        } else {
            ceasarArrayTwo.push(element)
        }
        
    })
    return ceasarArrayTwo.join("")

        
}
export {capitalize, reverseString, calculator, ceasarCipher}