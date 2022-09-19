// // function connect(after) {
// //     ...
// //     if(userIsLoggedIn) {
// //         after("/my-home-feed")
// //     } else {
// //         after("/login")
// //     }
// // }

// // function redirect(where) {
// //     if(!isUserTyping) {
// //         window.location = where
// //     }
// // }

// // connect(redirect)


// // SEPARATION OF CONCERNS
// // COMPOSIBILITY 





// // javascript callbacks

// // callbacks are functions that are passed as arguments to other functions
// // callbacks are used to make sure that a function is “not going to run before a task is completed”
// // you can also think of them in terms of “when a task is completed, do this”
// // or "when an event happens, use this function to respond to it"
// // example ( try running it! ): 


// FUNCTOR - 
// HIGHER ORDER FUNCTION -
// MONAD - 

// // RECURSIVE - A FUNCTION CALLING ITSELF
// // function crashTheComputer() {
//     // crashTheComputer()
// // }
// // crashTheComputer()

// // function that takes a callback as an argument
// function doSomething(callback) {
//     // do something

//     // then call the callback
//     callback()
// }

// // function that is passed as an argument to another function
// function consoleLogger() {
//     console.log("I am a callback")
// }

// // call the function that takes a callback as an argument
// doSomething(consoleLogger)

// /////////////////////////////////////////////////////////////////////////////

// // a more practical example in javascript would be event listeners
// // addEventListener's second argument is a "callback function" that will be called when the event happens

// // add an event listener to the button
// document.querySelector("#button").addEventListener("click", function() {
//     console.log("I am a callback")
// })

// // higher order functions
// // these are functions that take other functions as arguments, or return functions as their results
// // so when you see a function that takes another function as an argument,
// // you can think of it as a HOF, and the function that is passed as an argument is a callback


// // can you think of other examples of where we use callbacks in javascript?
// // some other examples of HOFs that take callbacks in javascript are:
// // setTimeout
// setTimeout(function(){

// },1000)
// // setInterval
// // fetch
// // map
// // filter
// // reduce
// // forEach
// // (you can write your own functions that take callbacks as arguments, like the first example in this file)

// // HOMEWORK: 
// // 1. write a function that takes a callback as an argument
function helloFrends() {
    console.log("Wellcome!")
}
// setTimeout(helloFrends, 2000)
// // 2. write a function that takes a callback as an argument and calls the callback

const mutedChannels = [23423,456456,1231]

function optionallyMessageIfNotMuted(channelId, msgCallback) {
    // ...check if muted.....
    if(!mutedChannels.includes(channelId)){
        msgCallback()
    } else {
        throw new Error("channel muted, request Failed")
    }
} 

optionallyMessageIfNotMuted(23423, helloFrends)

// 3. write a function that takes a callback as an argument and calls the callback with an argument


function paypalPaymentProcessHandler(id, price, recipientID, resultHandler) {
    if(users.find(id).money > price) {
        resultHandler("OK")
    } else {
        resultHandler("payment, please try again", {reason:"card blocked"})
    }
}


function showUserPaymentResult(result, reason) {
    if(result === "OK") {

    } else {
        console.log(reason)
    }
}


// 4. write a function that takes a callback as an argument and calls the callback with an argument that is the result of another function


// helloFrends()

// procedural / functional programming