console.log("yep you connected js ")

// user does something
// we listen in javascript to that action 
// we respond to the action 
// we give the user feedack 

// VARIABLE - is something that varies (changes)
// CRUD 
// adding / checking / updating / deleting things in an array. (CRUD)
//                0        1         2
const myList = [
    {pending: true, text:"apple", date: new Date()},
    {pending: true, text:"banana", date: new Date()},
    {pending: true, text:"coffee", date: new Date()}
]
let editingIndex = 2

const inputEl = document.querySelector("#user-text-input-element")
const targetEl = document.querySelector("#target")
const pendingToggleEl = document.querySelector("#pending-toggle")

// CREATE
inputEl.addEventListener("keyup", function(e){
    console.log(e)
    if(e.key === "Enter") {
        console.log(inputEl.value)

        const newItem = {
            pending:true,
            text:inputEl.value,
            date: new Date()
        }

        myList.unshift(newItem)
        render()
    }
})
// READ 
function render() {
    const myListAsHTML = myList
        // "if showOnly pending, allow only pending:true items through the filter"
        .filter(function(item){
            return showOnlyPending ? item.pending : true
        })
        .map(function(item, i) {
            return `
                <div>
                    ${item.date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    ${editingIndex === i ? `<input onkeyup="handleInlineEditorKeyup(event, ${i})" type="text" value="${item.text}"></input>` : `<span ondblclick="setMeAsActivelyBeingEdited(${i})" >${item.text}</span>`}
                    ${item.pending}
                    <!--put the toggle pending/not pending button here-->
                    <button onclick="toggleDone(${i})">✅</button>
                    <button onclick="remove(${i})">🗑</button>
                </div>`
        })
        .join("")
    targetEl.innerHTML = myListAsHTML
}
// UPDATE
function toggleDone(i) {
    editingIndex = i
    myList[i].pending = !myList[i].pending
    render()
}

function setMeAsActivelyBeingEdited(i) {
    editingIndex = i
    render()
} 
function handleInlineEditorKeyup(event, i) {
    console.log("hi", i, event)
    if(event.key === "Escape") {
        editingIndex = -1
        render()
    }
    if(event.key === "Enter") {
        myList[i].text = event.target.value
        editingIndex = -1
        render()
    }
}

function toggleDone(i) {
    myList[i].pending = !myList[i].pending
    render()
}

// DELETE
function remove(i) {
    myList.splice(i,1)
    render()
}

// FILTER OUT DONE
// A NEW PIECE OF STATE IN OUR APP 
let showOnlyPending = false;
pendingToggleEl.addEventListener("click", function(event){
    showOnlyPending = !showOnlyPending
    pendingToggleEl.innerText = showOnlyPending ? "remove filter" : "show only pending"
    render()
    console.log(showOnlyPending)
})

// "initial render" // "initial draw"
render()