//var names = ['Bob', 'Chris', 'Tom'];////

//names.forEach(function (name) {
// console.log('forEach', name);
//});////

//names.forEach((name) => {
// console.log('arrowFunc', name);
//});////

//names.forEach((name) => console.log(name));//

//var returnMe = (name) => name + '!';
//console.log(returnMe('Bob'));////

//var person = {
// name: 'Bob',
// greet: function () {
//   names.forEach( (name) => {
//     console.log(this.name + ' says hi to ' + name)
//   });
// }
//};////

//person.greet();//

//Challenge

function add (a, b)  {
return a+b;
}

var addStatement = (a, b) => {
  return a+b;
}

console.log(addStatement(1,0));

var addExpression = (a,b) => a+b;
console.log(addExpression(2,2));
