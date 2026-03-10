//this is a single line comment

/*
this is multiline
comment
*/

//Data types - string, number, boolean, undefined --> value types --> value will be copied to the variable
//Refernce Types- Objects, Arrays, Functions -->  address will be copied to variable

//varaiables - let, const, var

//string
// let x = "Krishna";
// console.log(x);
// console.log(typeof x);

//number
// let x = 2;
// console.log(x);
// console.log(typeof x);

// let x = 2.6;
// console.log(x);
// console.log(typeof x);

//Boolean - true/false
// let x = true; 
// console.log(x);
// console.log(typeof x);

//undefined
// let x; 
// console.log(x);
// console.log(typeof x);

//null
// let y=null; // undefined != null
// console.log(y);
// console.log(typeof y);


// let a = 5;
// a = 10;
// console.log(a);
// a = 20;
// console.log(a);

// let a = 5;
// let b = 8;
// a = a + b;
// console.log(a);
// console.log(b);

// let a = 'Lets learn JS';
// let b = 8;
// let c = a + b;
// console.log(c);

// let age = 14;
// let name2 = "John";
// let printResult = 'Student with name ' + name2 + ' and age is = ' + age;
// console.log(printResult);
// let printResult2 = `Student with name ${name2} and age ${age} is in class 10`;
// console.log(printResult2);


// =   --> aggignment
// ==  --> comaprison value operator without considering data type
// === --> comparison value operator with data type
// let z = 5;
// console.log(z == 5);
// console.log(z == 6);
// console.log(z == '5');
// console.log(z === '5');
// console.log(z === 5);

// let m = 5;
// m = 'name';
// console.log(m);

//Objects
 let course = {
    title: ['CAP', 'RAP'],
    description: 'Cloud App Programming Model',
    rating: '5'
 }
//console.log(course);
//console.log(typeof course);

let course2 = {
    title: 'CAP',
    description: 'Cloud App Programming Model',
    rating: '5'
 }

//console.log(course == course2); // here it will check value
//console.log(course === course2); // here it will check value + data type

//console.log(course.title);
//console.log(course['title']);

// let employee= {
//     name: "Krishna",
//     empid: "101",
//     address: {
//         street: "whitefield",
//         zip: "123"
//     }    
// };

//console.log(employee.address.street);

//Array

// let aValues = [1, 'test', true, null];
// console.log(aValues);
// console.log(typeof aValues);
// console.log(aValues[1]);

//Functions
//way1
function addition(input1, input2){
    return input1 + input2;
}
//way2
let addition2 = function (input1, input2){
    return input1 + input2;
}
//way3
//ES5, ES6 ==> ES --> Ecma Script 
let addition3 = (input1, input2) => input1 + input2;
let addition4 = (input1, input2) => {
    let c = input1 * 10;
    return c + input2; 
};

let result = addition3(3,5);
//console.log(result);
//console.log(typeof addition3);


//const a = 5;
//a = 6;
//console.log(a);

//conditional logic
// let x = 5;
// if(x === 5){
//     console.log("Vale is 5");
// }else{
//     console.log("Vale is not 5");
// }

