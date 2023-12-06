'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(startIndex, mainIndex){
    return this.starterMenu[startIndex], this.mainMenu[mainIndex]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//The Spread operator[...]
  // const arr = [2, 5, 6, 7]

  // const newArr = [1, 2, ...arr]
  // console.log(newArr)
  // console.log(...newArr)

  // const newMenu = [...restaurant.mainMenu, 'Mashonja']

  // console.log(newMenu)
  // console.log(...newMenu)

  // //Copying two arrays
  //   const mainMenuCopy = [...restaurant.mainMenu]
  // //Joining two array together
  // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

  // console.log(menu)

//Object destructuring


// const {name, openingHours, categories} = restaurant;
// const {name:resturantName} = restaurant;
// console.log(resturantName)
// const {menu = [], starterMenu:starters = []} = restaurant;
// console.log(menu, starters)

//Mutating objects
// let a = 111
// let b = 999

// const obj = {a:23, b: 7, c: 14}
// ({a,b}) = obj


// console.log(a,b)

//Neste objects

// const {fri:{open, close}} = restaurant.openingHours

// console.log(open, close)

//Array destructuring

// const array = [34, 5, 6, 67, 8]

// const [a,b,c,d,e] = array;

// console.log(d)

// const [firstCategory,,thirdCategory] = restaurant.categories

// console.log(firstCategory, thirdCategory)

// //Switching variable via destructuring

// //[main, secondary] = [secondary, main]
// //console.log(main, secondary)

// //Receive 2 returned values from a function via destructing
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)

//Destructing with Nested arrays 

// const nested = [2,4,[5,6]]

// console.log(nested)


// const [i,,j] = nested;
// const [x, , [b,y]]= nested;