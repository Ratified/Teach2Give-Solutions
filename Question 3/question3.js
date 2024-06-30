/*3. Design a function that takes a string or sequence of characters as input and returns the character that appears most frequently. Eg 11189 => '1' hello => l */
function mostFrequentCharacter(str) {
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
    return maxChar;
}

console.log(mostFrequentCharacter('11189')); 
console.log(mostFrequentCharacter('hello')); 