const intro = "  Hey my name is vansh pratik.";

console.log(intro.length); // 27 - retun length of string.
console.log(intro.indexOf('is')); // 12 - Returns the position of the first occurrence of a substring.
console.log(intro.lastIndexOf('a')); // 23 - Returns the position of the last occurrence of a substring.
console.log(intro.substring(4,11)); // my name
console.log(intro.includes('vansh')); // true
console.log(intro.search('my')); // 4
console.log(intro.concat(' I like to play chess. '));
console.log(intro.trim()); //Removes starting and ending white space
console.log(intro.toUpperCase()); //  HEY MY NAME IS VANSH PRATIK
console.log(intro.toLocaleLowerCase()); //  hey my name is vansh pratik.
console.log(intro.charAt(10)); //a
console.log(intro.charCodeAt(10));  // 97
console.log(intro.slice(9,23)); // name is vansh
console.log(intro.replace('name is','self')); // replace the string


