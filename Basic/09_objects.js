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

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();
console.log(
  "Singleton Pattern Instance:",
  singletonInstance1 === singletonInstance2
); // Output: true

// Object.create for Prototypal Inheritance: Demonstrates creating an object with a specific prototype.
const prototypePerson = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const user = Object.create(prototypePerson);
user.name = "Ankit";
user.isHuman = true;
user.printIntroduction(); // Output: My name is Ankit. Am I human? true

// Object Literals: Shows how to create and manipulate objects using literals, including computed property names with symbols.
const mySymbol = Symbol("key1");

const jsUser = {
  name: "Ankit",
  "full name": "Ankit Chauhan",
  [mySymbol]: "mykey1",
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
console.log(jsUser.email); // Output: ankit@google.com
console.log(jsUser["email"]); // Output: ankit@google.com
console.log(jsUser["full name"]); // Output: Ankit Chauhan
console.log(jsUser[mySymbol]); // Output: mykey1

jsUser.email = "ankit@chatgpt.com";
// Object.freeze(jsUser); // freeze the object
jsUser.email = "ankit@microsoft.com"; // Will not change if the object is frozen
console.log(jsUser.email); // Output: ankit@chatgpt.com

jsUser.greeting(); // Output: Hello JS user
jsUser.greetingTwo(); // Output: Hello JS user, Ankit

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
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const mergedObj = { ...obj1, ...obj2, ...obj3 };
console.log(mergedObj); // Output: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

// Merging Objects with Object.assign: Demonstrates merging objects using Object.assign.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }
console.log(target); // Output: { a: 1, b: 4, c: 5 } - target is also modified

// Array of Objects: Illustrates handling arrays containing objects.
const usersArray = [
  { id: 1, email: "a@gmail.com" },
  { id: 2, email: "b@gmail.com" },
  { id: 3, email: "c@gmail.com" },
];
console.log(usersArray[1].email); // Output: b@gmail.com

// Object Methods: Covers useful methods like Object.keys(), Object.values(), Object.entries(), and Object.hasOwnProperty().
console.log(Object.keys(tinderUser)); // Output: ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser)); // Output: ["123abc", "Sammy", false]
console.log(Object.entries(tinderUser)); // Output: [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Output: true

// Destructuring Objects: Demonstrates how to extract properties from objects using destructuring.
const course = {
  courseName: "JS in Hindi",
  price: "999",
  courseInstructor: "Ankit",
};

const { courseInstructor } = course;
console.log(courseInstructor); // Output: Ankit

// JSON Representation: Shows how to convert objects and arrays of objects to JSON strings.
const jsonObject = JSON.stringify({
  name: "Ankit",
  courseName: "JS in Hindi",
  price: "free",
});
console.log(jsonObject); // Output: {"name":"Ankit","courseName":"JS in Hindi","price":"free"}

const jsonArray = JSON.stringify([
  { name: "Ankit" },
  { courseName: "JS in Hindi" },
  { price: "free" },
]);
console.log(jsonArray); // Output: [{"name":"Ankit"},{"courseName":"JS in Hindi"},{"price":"free"}]

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
const shallowCopy = Object.assign({}, original);
console.log(shallowCopy); // Output: { a: 1, b: 2 }

const deepCopy = JSON.parse(JSON.stringify(regularUser));
console.log(deepCopy); // Deep clone of regularUser

// Object.freeze and Object.seal: Explains how to use Object.freeze() and Object.seal() to make objects immutable.
const frozenObj = { name: "Frozen Object" };
Object.freeze(frozenObj);
frozenObj.name = "New Name"; // This will not change the name
console.log(frozenObj.name); // Output: Frozen Object

const sealedObj = { name: "Sealed Object" };
Object.seal(sealedObj);
sealedObj.name = "New Name"; // This will change the name
console.log(sealedObj.name); // Output: New Name
sealedObj.newProp = "New Property"; // This will not add the property
console.log(sealedObj.newProp); // Output: undefined

// Using Prototypes: Demonstrates using prototypes to add methods to constructor functions.
function Person(firstName, lastName, age, gender) {
  this.name = {
    first: firstName,
    last: lastName,
  };
  this.age = age;
  this.gender = gender;
}

Person.prototype.greeting = function () {
  console.log(`Hi! I'm ${this.name.first}`);
};

const personInstance = new Person("Ankit", "Chauhan", 25, "male");
personInstance.greeting(); // Output: Hi! I'm Ankit

// Object.entries and Object.fromEntries: Shows how to convert objects to arrays of key-value pairs and vice versa.
const jsUserEntries = Object.entries(jsUser);
console.log(jsUserEntries); // Output: Array of key-value pairs

const recreatedJsUser = Object.fromEntries(jsUserEntries);
console.log(recreatedJsUser); // Output: Object recreated from key-value pairs

/*
Explanation:
- Singleton Pattern: Ensures only one instance of an object is created.
- Object.create for Prototypal Inheritance: Demonstrates creating an object with a specific prototype.
- Object Literals: Shows how to create and manipulate objects using literals, including computed property names with symbols.
- Accessing and Modifying Properties: Illustrates different ways to access and modify object properties.
- Creating Objects: Demonstrates creating objects using constructors and object literals.
- Nested Objects: Shows how to access and manipulate nested object properties.
- Merging Objects: Demonstrates merging objects using the spread operator and Object.assign.
- Array of Objects: Illustrates handling arrays containing objects.
- Object Methods: Covers useful methods like Object.keys(), Object.values(), Object.entries(), and Object.hasOwnProperty().
- Destructuring Objects: Demonstrates how to extract properties from objects using destructuring.
- JSON Representation: Shows how to convert objects and arrays of objects to JSON strings.
- Adding Methods to Objects: Illustrates adding methods to objects and using this keyword.
- Using `this` in Objects: Demonstrates using `this` to refer to object properties within methods.
- Copying and Cloning Objects: Covers shallow and deep copying of objects.
- Object.freeze and Object.seal: Explains how to use Object.freeze() and Object.seal() to make objects immutable.
- Using Prototypes: Demonstrates using prototypes to add methods to constructor functions.
- Object.entries and Object.fromEntries: Shows how to convert objects to arrays of key-value pairs and vice versa.
*/
