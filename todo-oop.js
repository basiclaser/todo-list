console.log("yep you connected js ")

// user does something
// we listen in javascript to that action 
// we respond to the action 
// we give the user feedack 

const initialState = [
    {inProgress: true, text:"apple", date: new Date()},
    {inProgress: true, text:"banana", date: new Date()},
    {inProgress: true, text:"coffee", date: new Date()}
]

const inputEl = document.querySelector("#user-text-input-element")
const targetEl = document.querySelector("#target")
const inProgressToggleEl = document.querySelector("#inProgress-toggle")

class TodoItem {
    constructor(text, inProgress = true, date = new Date()) {
        this.text = text
        this.date = date
        this.inProgress = inProgress
    }
}

class TodoList {
    constructor() {
        this._list = []
        this.editingIndex = 2
        this.showOnlyinProgress = true;
        this.showOnlyThisWeek = true;
    }
    add(item) {
        this._list.unshift(item)
    }
    remove(i) {
        this._list.splice(i,1)
    }
    update(i, item) {
        this._list[i] = item
    }
    toggleDone(i) {
        this._list[i].inProgress = !this._list[i].inProgress
    }
    getItems() {
        return this._list
    }
}

const todoList = new TodoList()

// CREATE

inputEl.addEventListener("keyup", function(event){
    if(event.key === "Enter") {

        const newItem = new TodoItem(inputEl.value)
        todoList.add(newItem)
        console.log(todoList)
        render()
    }
})


// load the state (could in a real app be from a database or a file or localStorage)
initialState.forEach(item => {
    todoList.add(new TodoItem(item.text, item.inProgress, item.date))
})

const inProgressFilter = (item) => todoList.showOnlyinProgress ? item.inProgress : true

const thisWeekFilter = (item) => {
    const today = new Date()
    const thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
    return item.date < thisWeek
}

const chronoSort = (a,b) => a.date - b.date

const listItemTemplate = (item, i) => `
        <div class="list-item item-${i} ${todoList.editingIndex === i ? "editing-active" : ""}">
            ${i})
            ${item.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            })}
            ${todoList.editingIndex === i ? 
                `<input onkeyup="handleInlineEditorKeyup(event, ${i})" type="text" value="${item.text}"></input>`
                :
                `<span ondblclick="setMeAsActivelyBeingEdited(${i})" >${item.text}</span>`
            }
            ${item.inProgress}
            <!--put the toggle inProgress/not inProgress button here-->
            <button onclick="todoList.toggleDone(${i})">toggle</button>
            <button onclick="todoList.remove(${i})">delete</button>
        </div>`

function render() {
    targetEl.innerHTML = todoList
        .getItems()
        .filter(inProgressFilter) // "if showOnly inProgress, allow only inProgress:true items through the filter"
        // .filter(thisWeekFilter)
        // .sort(chronoSort)
        .map(listItemTemplate)
        .join("")
}

// functions for managing user actions
function setMeAsActivelyBeingEdited(i) {
    todoList.editingIndex = i
    render()
} 

function handleInlineEditorKeyup(event, i) {
    if(event.key === "Escape") {
        todoList.editingIndex = -1
        render()
    }
    if(event.key === "Enter") {
        todoList.update(i, new TodoItem(event.target.value, todoList._list[i].inProgress, todoList._list[i].date))
        todoList.editingIndex = -1
        render()
    }
}

// DELETE
function remove(i) {
    todoList.remove(i)
    render()
}

inProgressToggleEl.addEventListener("click", function(event){
    todoList.showOnlyinProgress = !todoList.showOnlyinProgress
    inProgressToggleEl.innerText = todoList.showOnlyinProgress ? "remove filter" : "show only inProgress"
    render()
})


// "initial render" // "initial draw" -
// we have to tell the page to draw itself for the first time, 
// otherwise it will be blank
render()

