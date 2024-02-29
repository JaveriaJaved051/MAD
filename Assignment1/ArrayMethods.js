let array=["MAD" ,"Computer Vision","Software Testing" ,"Data Science","Financial Accounting"];
console.log(array)

console.log(array.length);

console.log(array.at(0));

let s=array.toString();
console.log(typeof s);

console.log(array.join("*"));

console.log(array.at(-1));

console.log(array.pop());
console.log(array);

console.log(array.push("FA"))
console.log(array);

console.log(array.shift())
console.log(array);

console.log(array.unshift("oop"));
console.log(array);

delete array[1]
console.log(array)

let array1=[1,2,3,4,5];
let array2=[1,2,3,4,5];
let res=array1.concat(array2);
console.log(res);
console.log(res.concat("soho"));

const names = ["Ali", "Ahmed", "Aqsa", "Shiza", "Faisal"];
names.copyWithin(2, 0);
console.log(names);

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits2.copyWithin(2, 0,2);
console.log(fruits2)

let arr = [1, 2, [3, 4, [5, 6]]];
let flat_arr=arr.flat(1);
console.log(flat_arr);

let fully_flat=arr.flat(Infinity);
console.log(fully_flat);


let  namess = ["Ani", "Ayesha", "Aqsa", "Shiza", "Aleeza"];
let n=namess.splice(2,0,"mee")
console.log(n);//
console.log(namess)

console.log(namess.slice(1,2));//return portion of array
console.log(namess.splice(0,1,"mee"))
console.log(namess)//Return Value: An array containing the deleted elements (if any).alter the orignal array
console.log(names.toSpliced(0,1,"je"))//not alter orignal array .other is similar to splice
let a=["a","b","c","d","e"];
console.log(a.copyWithin(1,3,4));

let numbers=[1,2,3,4,5,6,7,8,9,10]
numbers.forEach( function print(x){
    console.log(x);
})
//map

let mu_arr=[1,2,3,4,5]
function sum(x){
    return x+1;
}
let aray=mu_arr.map(sum)
console.log(aray);
//reduce
function summ(x,y){

    return x+y;
}
let ar=mu_arr.reduce(summ)
let ae=mu_arr.reduceRight(summ);
console.log(ae)
console.log(ar);

//of()
let b=Array.of("abc","def","ghi");
console.log(b);

console.log(b.reverse())




