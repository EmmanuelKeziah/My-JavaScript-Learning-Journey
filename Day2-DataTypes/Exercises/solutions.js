// Day 2 - JavaScript Data Types Solutions

// 1. Declare a string variable and log its length
let city = "Lagos";
console.log(city.length); // 5 → The .length property counts characters

// 2. Convert a number to a string
let age = 25;
console.log(String(age)); // "25" → Wrapped inside String()

// 3. Check the type of a boolean value
let isAdmin = true;
console.log(typeof isAdmin); // "boolean" → typeof shows the type

// 4. Variable declared but not initialized
let score;
console.log(score); // undefined → No value assigned

// 5. Null value and type
let response = null;
console.log(response); // null
console.log(typeof response); // "object" → Quirk in JS

// 6. Symbols with same description
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false → Each Symbol is unique

// 7. BigInt example
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// 8. Object with properties
let car = { brand: "Toyota", year: 2020, isNew: false };
console.log(car.brand); // "Toyota"

// 9. Array of fruits
let fruits = ["Mango", "Banana", "Apple"];
console.log(fruits[1]); // "Banana" → Index 1 = second element

// 10. Greeting function
function greet(name) {
return `Hello, ${name}`;
}
console.log(greet("Ada")); // "Hello, Ada"

// 11. Dynamic typing
let data = "Hello";
data = 42;
data = true;
console.log(data); // true → Same variable, different types

// 12. Concatenate string + number
let message = "You are " + 18 + " years old.";
console.log(message); // "You are 18 years old."

// 13. Boolean to number
let isActive = false;
console.log(Number(isActive)); // 0 → true = 1, false = 0

// 14. Check if variable is array
let colors = ["red", "green"];
console.log(Array.isArray(colors)); // true

// 15. Add element to array
let animals = ["Dog", "Cat"];
animals.push("Elephant");
console.log(animals); // ["Dog", "Cat", "Elephant"]

// 16. Object property access
let student = { name: "Keziah", age: 20 };
console.log(student.name);     // "Keziah"
console.log(student["age"]);   // 20

// 17. Function returning type
function checkType(value) {
return typeof value;
}
console.log(checkType(123)); // "number"
console.log(checkType("Hi")); // "string"

// 18. Compare null and undefined
console.log(null == undefined);  // true → loose equality
console.log(null === undefined); // false → strict equality

// 19. Nested object
let user = {
profile: { username: "Ada", email: "[ada@email.com](mailto:ada@email.com)" }
};
console.log(user.profile.username); // "Ada"

// 20. Array of objects
let books = [
{ title: "JS Basics", pages: 120 },
{ title: "Advanced JS", pages: 300 }
];
console.log(books[1].title); // "Advanced JS"
