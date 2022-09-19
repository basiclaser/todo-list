// classes are a way to create objects
// objects are a way to organize data (as we did yesterday) but also functions that operate on that data into a single unit that can be reused
// object oriented programming and classes are commonly linked together, but they are not the same thing
// in javascript you can create objects without classes though and still use object oriented programming
// that is what we will look at now 

// OOP - class pattern vs prototype pattern vs factory pattern vs constructor pattern vs singleton pattern


// TODO list example 
// class pattern 
class Todo {
    constructor() {
        this.todos = [];
    }
    add(todo) {
        this.todos.push(todo);
    }
    remove(todo) {
        this.todos = this.todos.filter((t) => t !== todo);
    }
    print() {
        console.log(this.todos);
    }
}
const todo = new Todo();
todo.add("learn OOP");
todo.add("learn functional programming");

// to inspect the class, we can use the "instanceof" operator
// this will tell us if the object is an instance of the class
console.log(todo instanceof Todo); // true

// "this" - what is it? 
// "this" is a keyword that refers to the object that the function is called on
// when you call a function, the function is called on an object
// the object that the function is called on is called the "context" of the function
// when it comes to inheritance, the context of the function is important





// prototype pattern
function Todo2() {
    this.todos = [];
}
Todo2.prototype.add = function (todo) {
    this.todos.push(todo);
}
Todo2.prototype.remove = function (todo) {
    this.todos = this.todos.filter((t) => t !== todo);
}
Todo2.prototype.print = function () {
    console.log(this.todos);
}
const todo2 = new Todo2();
todo2.add("learn OOP");
// to inspect the prototype, we can use the __proto__ property
console.log(todo2.__proto__);


// factory pattern

// factory pattern is a way to create objects
// its a way to create objects without using the "new" keyword
// the factory pattern is a way to create objects without using the "new" keyword
function createTodo() {
    return {
        todos: [],
        add(todo) {
            this.todos.push(todo);
        },
        remove(todo) {
            this.todos = this.todos.filter((t) => t !== todo);
        },
        print() {
            console.log(this.todos);
        }
    }
}
const todo3 = createTodo();
