//1. push

let arr1=[1,2,3,4,5];
arr1.push(7);
console.log("The arr after push is:",arr1);

//2.pop
let arr2=[1,2,3,4,5];

arr2.pop(5);
console.log(arr2);


//3.shift:remove the first element
let arr3=[1,2,3,4,5];
arr3.shift();
console.log("The arr after shift is",arr3);


//4.unshift:add one more element at begening
let arr4=[1,2,3,4,5];
arr4.unshift(9);
console.log("The arr after unshift is",arr4);


//6.sort
let arr5=[1,5,8,3,2,4];
arr5.sort();
console.log("The array after sort is:",arr5);


//7.some method :Check and return true if at least one condition satiesfies;
const numbers=[10,15,20,17,89];

function findNumber(num){
    return num>10;
}
console.log("The ans is:",numbers.some(findNumber)); 


//8.Every method:agr condition saari value ko satify krengi toh true return karega

const numbers1=[10,15,20,3];

function findNumber1(num){
    return num%5==0;
}

console.log("The ans of every method is :",numbers1.every(findNumber1));


//9.reversed
const numbers3=[10,15,20,3];
console.log( "The reversed array is ",numbers3.reverse());


//10.fill:fill all the element of array which we gave
const numbers4=[10,15,20,3];
console.log( numbers4.fill("Aman")); // here we can also do by indexing in which place we want to change we can change only

//11.find():Returns the value of the first element in the array that satisfies the provided testing function

const number5=[1,2,15,20];


function findm(num){
    return num%5==0;
}
console.log("The ans is:",number5.find(findm)); 

//12.findIndex():Returns the index of the first element in the array that satisfies the provided testing function.

console.log("The index is  is:",number5.findIndex(findm)); 


//16.indexOf():Returns the first index at which a given element can be found in the array, or -1 if it is not present.

 const number6=[15,2,15,20];
console.log("The  index is:",number6.indexOf(15,2)); //first is search element other is from which index to start seatch

//17.indcludes():Determines whether an array includes a certain value among its entries, returning true or false.

const number7=[1,2,15,20];
console.log( number7.includes(3));

//18.lastIndexOf():Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const number8=[1,2,15,20];
console.log("The last indexOF",number8.lastIndexOf(15));


//19.concat:Merge two strings
const string1="Aman";
const string2="Jain";
console.log(string1.concat(string2));



