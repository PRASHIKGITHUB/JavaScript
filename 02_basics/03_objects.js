// singleton
Object.create //we will talk about it later

// object literals

const mySym = Symbol("key1")

//(Q)can i add methods and values to a object outside the object declaration
//Yes, in JavaScript, you can both add properties (values) and methods to an object outside the initial object declaration. This flexibility is one of the powerful features of JavaScript. Here's how you can do it:
/*
// Initial object declaration
const JsUser = {
    name: "Hitesh",
    age: 18
};

// Adding a new property (value) to the JsUser object
JsUser.location = "Jaipur";

// Adding a new method to the JsUser object
JsUser.greeting = function() {
    console.log("Hello, my name is " + this.name);
};

// Now you can use the added property and method
console.log(JsUser.location); // Output: "Jaipur"
JsUser.greeting(); // Output: "Hello, my name is Hitesh"
 

 */


const JsUser = {
    //Properties: Data associated with the JsUser object, such as name, age, location, email, etc.
    // Methods: The greeting function associated with the JsUser object, which can be invoked to perform actions (in this case, logging a greeting message to the console).
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // you cannot access this as JsUser.full name
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());