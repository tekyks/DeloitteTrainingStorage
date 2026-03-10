const dummy = require('node:fs'); //get a reference of lib

// api call -> SO == 5 ms
//process 1
// dummy.readFile('file.txt', 'utf-8', function(err, data){
//     console.log(data);
// });
//process 2
//console.log("File read successful"); //0.1 ms

//sync process
const content = dummy.readFileSync('file.txt');
console.log(content.toString());

console.log("File read successful");