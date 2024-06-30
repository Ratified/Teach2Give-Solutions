/* Question 1. Design a function that reverses the digits of an integer. For example, 50
should become 5 and -12 should become -21. */

function reverseDigits(num) {
    const isNegative = num < 0;
    const reversedNumber = parseInt(num.toString().split('').reverse().join(''));
    if(isNegative){
        return -reversedNumber;
    } else{
        return reversedNumber;
    }
}

console.log(reverseDigits(50));  
console.log(reverseDigits(-12)); 