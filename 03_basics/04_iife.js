// Immediately Invoked Function Expressions (IIFE)


(function chai(user){ //named IIFE
    // named IIFE
    console.log(`DB CONNECTED ${user}`);
})("prashik"); //semicolon is necessary

( (name) => { //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

