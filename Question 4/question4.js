/* 4. Design a function that determines whether a given string is a pangram. A pangram is a sentence or phrase containing every letter of the alphabet at least once. Punctuation and case are typically ignored. For example, the string "The quick brown fox jumps over the lazy dog" is a pangram, while "Hello, world!" is not. */

function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const strLower = str.toLowerCase();
    for(let char of alphabet){
        if(strLower.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello, world!'));