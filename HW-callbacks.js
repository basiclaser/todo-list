// javascript callbacks

// callbacks are functions that are passed as arguments to other functions
// callbacks are used to make sure that a function is “not going to run before a task is completed”
// you can also think of them in terms of “when a task is completed, do this”
// or "when an event happens, use this function to respond to it"
// example ( try running it! ): 

// function that takes a callback as an argument
function doSomething(callback) {
    // do something
    // then call the callback
    callback()
}

// function that is passed as an argument to another function
function callback() {
    console.log("I am a callback")
}

// call the function that takes a callback as an argument
doSomething(callback)

/////////////////////////////////////////////////////////////////////////////

// a more practical example in javascript would be event listeners
// addEventListener's second argument is a "callback function" that will be called when the event happens

// add an event listener to the button
document.querySelector("#button").addEventListener("click", function() {
    console.log("I am a callback")
})

// so when you see a function that takes another function as an argument, you can think of it as a "callback function"
// can you think of other examples of callbacks in javascript?
// some other examples of callbacks in javascript are:
// setTimeout
// setInterval
// fetch
// map
// filter
// reduce
// forEach
// (you can write your own functions that take callbacks as arguments, like the first example in this file)

// HOMEWORK: 
// 1. write a function that takes a callback as an argument

// 2. write a function that takes a callback as an argument and calls the callback

// 3. write a function that takes a callback as an argument and calls the callback with an argument

// 4. write a function that takes a callback as an argument and calls the callback with an argument that is the result of another function

