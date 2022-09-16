// typescript homework 

// typescript helps you write more robust code during development and compile time
// it does this through primitive types definitions, interfaces, and type annotations
// typescript only exists during development, and just nags you if you do something wrong
// it doesnt run in the browser or node, it compiles to javascript
// (you can run it with bun & deno directly though )
// it does not exist in the compiled code, so it does not slow down your code

const myName: string = "joe"
const myAge: number = 42
const isOnline: boolean = true

// FUNCTION arguments can also be typed

// you can specify the type of the ARGUMENT as well!
function printName(name: string) {
    console.log(name)
}

// you can specify the type of the RETURN value as well!
function getMyName(): string {
    return myName
}

// INTERFACES
// interfaces are a way to define the shape of an object
// they are a way to define the properties and methods that an object should have

// this is a simple interface
interface Person {
    name: string
    age: number
    isOnline: boolean
}

// HOMEWORK: define an interface for a car
// mkdir HW
// cd HW
// touch HW-typescript.ts
// code HW-typescript.ts

// define an interface for a car
// hint: typescript files end in ".ts"
// hint: typescript need to be compiled to javascript to run in the browser or node

// it should have the following properties:
// make, model, year, color, isVeryGoodCar, isOnSale
// those properties should be typed as well! (string, number, boolean etc)
// it should have the following methods:
// start(), stop(), toggleSale()

// create a car object that implements the interface
const myCar: Car = {
    make: "Logitech"...
}