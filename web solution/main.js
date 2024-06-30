// 1. Reverse Digits
function reverseDigits() {
    const num = parseInt(document.getElementById('reverseDigitsInput').value);
    const isNegative = num < 0;
    const reversedNumber = parseInt(num.toString().split('').reverse().join(''));
    const result = isNegative ? -reversedNumber : reversedNumber;
    const reverseDigitsResult = document.getElementById('reverseDigitsResult');
    reverseDigitsResult.innerText = `Result: ${result}`;
}

// 2. Calculate Factorial
function calculateFactorial() {
    const num = parseInt(document.getElementById('factorialInput').value);
    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
    }
    const result = factorial(num);
    const factorialResult = document.getElementById('factorialResult');
    factorialResult.innerText = `Result: ${result}`;
}

// 3. Most Frequent Character
function findMostFrequentCharacter() {
    const str = document.getElementById('mostFrequentCharacterInput').value;
    const charMap = {};
    let maxChar = '';
    let maxCount = 0;
    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        } else{
            charMap[char] = 1;
        }
        if(charMap[char] > maxCount){
            maxCount = charMap[char];
            maxChar = char;
        }
    }

    let mostFrequentCharacterResult = document.getElementById('mostFrequentCharacterResult');
    mostFrequentCharacterResult.innerText = `Result: ${maxChar}`;
}

// 4. Check Pangram
function checkPangram() {
    const str = document.getElementById('pangramInput').value.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = alphabet.split('').every(char => str.includes(char));
    const pangramResult = document.getElementById('pangramResult');
    pangramResult.innerText = `Result: ${result ? 'Pangram' : 'Not a Pangram'}`;
}

// 5. Check Consecutive Threes
function checkConsecutiveThrees() {
    const input = document.getElementById('consecutiveThreesInput').value;
    let result = input.includes('33');
    const consecutiveThreesResult = document.getElementById('consecutiveThreesResult');
    consecutiveThreesResult.innerText = `Result: ${result}`;
}

// 6. Master Yoda
function reverseWords() {
    const str = document.getElementById('masterYodaInput').value;
    const result = str.split(' ').reverse().join(' ');
    const masterYodaResult = document.getElementById('masterYodaResult');
    masterYodaResult.innerText = `Result: ${result}`;
}
