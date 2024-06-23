// Singleton Pattern: Ensures only one instance of an object is created.
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log("Singleton Pattern Instance:", instance1 === instance2); // Output: true

// Object.create for Prototypal Inheritance: Demonstrates creating an object with a specific prototype.
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "Ankit";
me.isHuman = true;
me.printIntroduction(); // Output: My name is Ankit. Am I human? true

// Object Literals: Shows how to create and manipulate objects using literals, including computed property names with symbols.
const mySym = Symbol("key1");

const JsUser = {
  name: "Ankit",
  "full name": "Ankit Chauhan",
  [mySym]: "mykey1",
  age: 25,
  location: "Mumbai",
  email: "ankit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  greeting: function () {
    console.log("Hello JS user");
  },
  greetingTwo: function () {
    console.log(`Hello JS user, ${this.name}`);
  },
};

// Accessing and Modifying Properties: Illustrates different ways to access and modify object properties.
console.log(JsUser.email); // Output: ankit@google.com
console.log(JsUser["email"]); // Output: ankit@google.com
console.log(JsUser["full name"]); // Output: Ankit Chauhan
console.log(JsUser[mySym]); // Output: mykey1

JsUser.email = "ankit@chatgpt.com";
// Object.freeze(JsUser); // Uncomment to freeze the object
JsUser.email = "ankit@microsoft.com"; // Will not change if the object is frozen
console.log(JsUser.email); // Output: ankit@chatgpt.com

JsUser.greeting(); // Output: Hello JS user
JsUser.greetingTwo(); // Output: Hello JS user, Ankit

// Creating Objects: Demonstrates creating objects using constructors and object literals.
const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// Nested Objects: Shows how to access and manipulate nested object properties.
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ankit",
      lastname: "Chauhan",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname); // Output: Ankit

// Merging Objects: Demonstrates merging objects using the spread operator.
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3); // Output: {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}

// Array of Objects: Illustrates handling arrays containing objects.
const users = [
  { id: 1, email: "a@gmail.com" },
  { id: 2, email: "b@gmail.com" },
  { id: 3, email: "c@gmail.com" },
];
console.log(users[1].email); // Output: b@gmail.com

// Object Methods: Covers useful methods like Object.keys(), Object.values(), Object.entries(), and Object.hasOwnProperty().
console.log(Object.keys(tinderUser)); // Output: ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser)); // Output: ["123abc", "Sammy", false]
console.log(Object.entries(tinderUser)); // Output: [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Output: true

// Destructuring Objects: Demonstrates how to extract properties from objects using destructuring.
const course = {
  coursename: "JS in Hindi",
  price: "999",
  courseInstructor: "Ankit",
};

const { courseInstructor: instructor } = course;
console.log(instructor); // Output: Ankit

// JSON Representation: Shows how to convert objects and arrays of objects to JSON strings.
const jsonObject = JSON.stringify({
  name: "Ankit",
  coursename: "JS in Hindi",
  price: "free",
});
console.log(jsonObject); // Output: {"name":"Ankit","coursename":"JS in Hindi","price":"free"}

const jsonArray = JSON.stringify([
  { name: "Ankit" },
  { coursename: "JS in Hindi" },
  { price: "free" },
]);
console.log(jsonArray); // Output: [{"name":"Ankit"},{"coursename":"JS in Hindi"},{"price":"free"}]

// Adding Methods to Objects: Illustrates adding methods to objects and using this keyword.
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  pages: 176,
  details: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log(book.details()); // Output: JavaScript: The Good Parts by Douglas Crockford

// Using `this` in Objects: Demonstrates using `this` to refer to object properties within methods.
const developer = {
  name: "Ankit",
  skills: ["JavaScript", "React", "Node.js"],
  showSkills: function () {
    this.skills.forEach((skill) => {
      console.log(`${this.name} knows ${skill}`);
    });
  },
};

developer.showSkills();
// Output:
// Ankit knows JavaScript
// Ankit knows React
// Ankit knows Node.js

// Copying and Cloning Objects: Covers shallow and deep copying of objects.
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
console.log(copy); // Output: { a: 1, b: 2 }

const deepCopy = JSON.parse(JSON.stringify(regularUser));
console.log(deepCopy); // Deep clone of regularUser

// Object.freeze and Object.seal: Explains how to use Object.freeze() and Object.seal() to make objects immutable.
const objToFreeze = { name: "Frozen Object" };
Object.freeze(objToFreeze);
objToFreeze.name = "New Name"; // This will not change the name
console.log(objToFreeze.name); // Output: Frozen Object

const objToSeal = { name: "Sealed Object" };
Object.seal(objToSeal);
objToSeal.name = "New Name"; // This will change the name
console.log(objToSeal.name); // Output: New Name
objToSeal.newProp = "New Property"; // This will not add the property
console.log(objToSeal.newProp); // Output: undefined

// Using Prototypes: Demonstrates using prototypes to add methods to constructor functions.
function Person(first, last, age, gender) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
}

Person.prototype.greeting = function () {
  console.log(`Hi! I'm ${this.name.first}`);
};

const person1 = new Person("Ankit", "Chauhan", 25, "male");
person1.greeting(); // Output: Hi! I'm Ankit

// Object.entries and Object.fromEntries: Shows how to convert objects to arrays of key-value pairs and vice versa.
const userEntries = Object.entries(JsUser);
console.log(userEntries); // Output: Array of key-value pairs

const userObject = Object.fromEntries(userEntries);
console.log(userObject); // Output: Object recreated from key-value pairs

/*
Explanation :
Singleton Pattern: Ensures only one instance of an object is created.

Object.create for Prototypal Inheritance: Demonstrates creating an object with a specific prototype.

Object Literals: Shows how to create and manipulate objects using literals, including computed property names with symbols.

Accessing and Modifying Properties: Illustrates different ways to access and modify object properties.

Creating Objects: Demonstrates creating objects using constructors and object literals.

Nested Objects: Shows how to access and manipulate nested object properties.

Merging Objects: Demonstrates merging objects using the spread operator.

Array of Objects: Illustrates handling arrays containing objects.

Object Methods: Covers useful methods like Object.keys(), Object.values(), Object.entries(), and Object.hasOwnProperty().

Destructuring Objects: Demonstrates how to extract properties from objects using destructuring.

JSON Representation: Shows how to convert objects and arrays of objects to JSON

*/
