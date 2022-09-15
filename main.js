// CRUD 
// adding / checking / updating / deleting things in an array. (CRUD)
//                0        1         2
const myList = ["apple", "banana", "coffee"]

// CREATE
// push "adding" "CREATEing something in array"
myList.push("good morning")
// unshift
myList.unshift("spaghetti")
// splice
myList.splice(1,0,"hey fabian")
console.log("(after splice)", myList)



// READ
//console.log("(before update)", myList)

// UPDATE
// first item is in zeroth position
myList[0] = "good night"

//console.log("(after update)", myList)

// DELETE
// pop - remove last item in array
myList.pop()
//console.log("(after pop)", myList)

// shift - remove first item in array
myList.shift()
//console.log("(after shift)", myList)

myList.splice(1,1)
//console.log("(after splice)", myList)
