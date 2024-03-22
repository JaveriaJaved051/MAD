let my_self="My name is Javeria Javed. I am in BSSE 6 semester.I am 21 years old";
//checking length
let result1=my_self.length;
console.log(result1);

//Extracting string characters
console.log(my_self.charAt(0));
console.log(my_self.charCodeAt(3));
console.log(my_self.at(0));
console.log(my_self.charCodeAt(0));
console.log(my_self.at(-1))
console.log(my_self[0])

//extracting strings parts
console.log(my_self.slice(0,67));
console.log(my_self.slice(-67));
console.log(my_self.slice(0));
console.log(my_self.slice(-11,-9));

console.log(my_self.substring(1));
console.log(my_self.substring(0,1));
console.log(my_self.substring(-4));

//Converting to Upper and Lower Case
console.log(my_self.toUpperCase());
console.log(my_self.toLocaleLowerCase())

//JavaScript String concat()
let m="I       like coding"+"nnnnn"+"nnn";
console.log(my_self.concat(m));

//trim method
let text1 = "     Hello javeria!     ";
console.log(text1.trim());
console.log(text1.trimStart());
console.log(text1.trimEnd());

//JavaScript String Padding
let text = "javeriA";
console.log(text.padStart(9,"a"));
console.log(text.padEnd(9,"a"));

//JavaScript String repeat()
console.log(text.repeat(100));

//Replacing String Content
console.log(text.replace("a","w"));
console.log(text.replace(/a/g,"w"));
console.log(text.replaceAll("a","aaa"))

//string plit function
let z="cats , dogs ,cow";
console.log(z.split(","))