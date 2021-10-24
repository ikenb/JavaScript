// var greeting = 'Hello';

// console.log(greeting)

// console.log([1,2,3,4,5,6])
// console.log({a:1, b:2})//object
// console.table({a:1, b:2})

// console.error('This is an error and will display in red')
// console.warn('This is a warning and will diplay in yellow')

// console.clear()


// //var, let , const

// var firstName = 'Tsepiso Doe'
// console.log(firstName)
// let fName = 'Tshepiso Blah';
// console.log(fName);

// //initialize variable

// var greetings;
// console.log(greetings)

console.clear();


//let
// let firstName = 'Tsepiso Doe'
// console.log(firstName)

//Const
// const firstName = "John";
// console.log(firstName);


// const person = {
//     firstName: 'John',
//     age: 35,
//     email:'email@email.com'
// }

// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// numbers.push(7);

// console.log(numbers);

  //=====================================Primitive types==============================================

// const name = 'John Doe';
// const age = 64;
// const isOld = true;
// let iDontKnowYet;

// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isOld)
// console.log(typeof iDontKnowYet)


  //=====================================Reference types==============================================

// const person = {
//     fName:'Joe',
//     sName:'Doe'
// }
// console.log(typeof person);

// const hobbies =['movies', 'music']
// console.log(typeof hobbies)


 //=====================================Type Conversion==============================================
// let val
// val = String(6);

//  console.log(val)
//  console.log(typeof val)
//  // console.log(val.length)

  //=====================================Type Conversion==============================================
// const num1 = 100;
// const num2 = 50;

// let val;

// val = num1 + num2
// val = num1 * num2
// val = num1 - num2
// val = num1 / num2
// val = num1 % num2

// val = Math.PI
// val = Math.E
// val = Math.round(3.9)
// val = Math.ceil(2.5)
// val = Math.floor(4.9)
// val = Math.sqrt(2) 

// val = Math.ceil
// (Math.random() * 10 +1)

// console.log(val)

//=====================================Strings==============================================

// const firstName = 'Manoti'
// const lastName = 'Perengwembe'

// let val

// val = firstName + ' '+ lastName;

// val = firstName

// val = 'That\'s awesome and I can\'t wait to see it'

// console.log(val)

//=====================================Template Literals==============================================

// const name = 'John'
// const age = 34
// const job = 'Developer'
// const city = 'Burgersfort'

// let html =
// `
// <ul>
// <li>Name:   ${name}</li>
// <li>Age:    ${age}</li>
// <li>Title:  ${job}</li>
// <li>City:   ${city}</li>
// </ul>
// `
// document.body.innerHTML = html

//=====================================Arrays And Array Methods==============================================

//  const numbers = [56,45,45,63,34,23,232,2,"sdfsdf",23,23]
//  const numbers2 = new Array(234,34,345,54,5,232,32,32,5,7);

//  console.log(numbers2)

//  let val;

//=====================================Dates==============================================
// let val;

// const today = new Date()

// val = today;

// console.log(val)

//=====================================Functions ==============================================


  // var todayDate = new Date();
 
  // var month = (todayDate.getMonth() + 1); 
  
  // var year = todayDate.getUTCFullYear(); 

  // var tdate = todayDate.getDate() - 7; 
 

  // if(tdate < 0)
  // {
  //   month = todayDate.getMonth() 
  //   var lastDay = new Date(year, month + 1, 0).getDate();

  //   tdate = lastDay - Math.abs(tdate)
  // }
  // console.log(lastDay);
  // console.log(tdate);

  // if(month < 10){
  //  month = "0" + month 
  // }
  // if(tdate < 10){
  //   tdate = "0" + tdate;
  // }
  // var maxDate = year + "-" + month + "-" + tdate;
  // document.getElementById("demo").setAttribute("min", maxDate);
  // console.log(maxDate);

// var date = new Date();
// date.setDate(date.getDate() - 2);

// var finalDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();
// console.log(finalDate);

// document.getElementById("demo").setAttribute("min", finalDate)



//=====================================If Statements ==============================================

// const id = 100;


// if(id == 100){
//   console.log('blaaaa blahhhh')
// }
// else{
//   console.log('This is it')

//   //compares the value and the type
// if(id == 100){
//   console.log('blaaaa blahhhh')
// }
// else{
//   console.log('This is it')
// }
// }

// if(typeof id !== `undefined`){
//   console.log(`The Id is ${id}`)
// }
// else{
//   console.log(`No Id`)
// }

// if(id >= 100){
//   console.log('Correct')
// }
// else{
//   console.log('Incorrect')
// }

//=====================================Switch ==============================================
// const colour = 'red';

// switch(colour){
//   case 'red':
//     console.log('The colour is red')
//     break;
//   case 'blue':
//     console.log('The clolour is blue')
//     break;
//     default:
//       console.log('I dont know what the colour is')

// }

// //days of the week

// let day;

// switch(new Date().getDay()){
//    case 0:
//      console.log('Today is Sunday')
//      break;
//      case 1:
//       console.log('Today is Monday')
//       break;
//       case 2:
//         console.log('Today is Tuesday')
//         break;
//         case 3:
//           console.log('Today is Wednesday')
//           break;
//           case 4:
//             console.log('Today is Thursday')
//             break;
//             case 5:
//               console.log('Today is Friday')
//               break;
//               case 6:
//                 console.log('Today is Saturday')
//                 break;
// }

//=================================Functions===============================

// function greet(){
//  return "we are greeting this person"
// }

// console.log(greet());

// function greet(firstName){

//   return firstName
// }

// console.log('Hello '+ greet("Tshepiso"))

//function Expression

// const square = function(x){
// return x*x
// }

// console.log(square(3));

//Immediately Invokable function expression

// (function(){
//   console.log('IIFE is running here....')
// })();

// (function(name){
//   console.log('Ola bra '+ name)
// })('Ike');

//propoerty methods
// const todo ={
//   add: function(){
//     console.log('Something is done here....');
//   }
// }

// todo.add();

//===========================Loops==================

// for(let i = 0; i < 10 ; i++){
//   console.log(i)
// }