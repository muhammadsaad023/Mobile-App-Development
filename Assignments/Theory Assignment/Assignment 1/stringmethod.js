let name = "Saad";
// String length

console.log(name.length);

//  String toUpperCase()
// String toLowerCase()

console.log(name.toUpperCase());
console.log(name.toLowerCase());


// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// ****slice
// slice method take argument
console.log(name.slice(0,2));
console.log(name.slice(2));

//**** substring(start, end)

const str = "Hello, World!";

const sub1 = str.substring(0, 5); // Extracts characters from index 0 to 4 (inclusive).
console.log(sub1); // Output: "Hello"

const sub2 = str.substring(7); // Extracts characters from index 7 to the end.
console.log(sub2); // Output: "World!"

const sub3 = str.substring(7, 12); // Extracts characters from index 7 to 11 (inclusive).
console.log(sub3); // Output: "World"

//**** substr(start, length)

const strr = "Hello, World!";

const subb1 = strr.substr(0, 5); // Extracts 5 characters from index 0.
console.log(sub1); // Output: "Hello"

const subb2 = strr.substr(7); // Extracts characters from index 7 to the end.
console.log(sub2); // Output: "World!"

const subb3 = strr.substr(7, 5); // Extracts 5 characters from index 7.
console.log(sub3); // Output: "World"

const sub4 = strr.substr(-6); // Extracts characters from the 6th position from the end to the end.
console.log(sub4); // Output: "World!"




//replace method

console.log(name.replace("Sa","da"))
//replaceAll

let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text)

// concat method 

let firstname="Muhammad";
let secondname="  Saad   ";
console.log(firstname.concat(secondname, "is a good boy ",));

//trim method(cancel extra spaces )
let friend2="       Saad       ";
console.log(friend2.trim())
console.log(friend2.trimStart())
console.log(friend2.trimEnd())

// padStart method()
let text2 = "5";
text = text2.padStart(4,"0");
console.log(text)

let numb = 5;
let text3 = numb.toString();
let padded = text.padStart(4,"0");
console.log(padded)

// padEnd method()


let padded1 = text3.padEnd(4,"0");
console.log(padded1)

let text4 = "5";
let padded2 = text4.padEnd(4,"x");
console.log(padded2)


let text5 = numb.toString();
let padded3 = text5.padEnd(4,"0");
console.log(padded3)



// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

console.log("*******charAt(position)**************")

let text6 = "HELLO WORLD";
let char = text.charAt(0);
console.log(char)

// charCodeAt(position)

let text7 = "HELLO WORLD";
let char2 = text.charCodeAt(0);
console.log(char2)

// Property access [ ]

let text8 = "HELLO WORLD";
let char3 = text8[0];
console.log(char3)

//Split

let tex = "Hello";
const myArr = tex.split("");

tex = "";
for (let i = 0; i < myArr.length; i++) {
tex += myArr[i] 
}
console.log(tex)