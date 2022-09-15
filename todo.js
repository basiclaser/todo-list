console.log("yep you connected js ")
// VARIABLE - is something that varies (changes)
// CRUD 
// adding / checking / updating / deleting things in an array. (CRUD)
//                0        1         2
const myList = [
    {done: false, text:"apple"},
    {done: false, text:"banana"},
    {done: false, text:"coffee"}
]
const inputEl = document.querySelector("#user-text-input-element")
const targetEl = document.querySelector("#target")



// LISTEN / PAY ATTENTION / OBSERVER / WAIT 
// DOM NODE 
// addEventListener(event type, function) <-- signature
inputEl.addEventListener("keyup", function(e){
    console.log(e)
    if(e.key === "Enter") {
        console.log(inputEl.value)
        myList.unshift(inputEl.value)
        render()
    }
})

// inputEl.addEventListener("keydown", (e)=>console.log(e.type))
// inputEl.addEventListener("keypress", (e)=>console.log(e.type))
// inputEl.addEventListener("keyup", (e)=>console.log(e.type))

// user does something
// we listen in javascript to that action 
// we respond to the action 
// we give the user feedack 

// CREATE
// unshift
// myList.unshift("spaghetti")


// READ
// create HTML, adding to the DOM (the page)

function render() {
    // take the data ( myList )
    // turn into "html" strings
    // put it into the dom 
    // "PRINT"
    const myListAsHTML = myList
        .map((item, i) => `<div onclick="remove(${i})">${item.text}  </div>`)
        // .reverse()
        // .sort()
        .join("")

    console.log(myListAsHTML)
    targetEl.innerHTML = myListAsHTML
}


// UPDATE
// myList[userClickIndex] = inputField.value


// DELETE
// myList.splice(i,1)

function remove(bazinga) {
    myList.splice(bazinga,1)
    render()
}


// "initial render" // "initial draw"
render()