console.log("yep you connected js ")

// user does something
// we listen in javascript to that action 
// we respond to the action 
// we give the user feedack 

// VARIABLE - is something that varies (changes)
// CRUD 
// adding / checking / updating / deleting things in an array. (CRUD)

const myList = [
    {inProgress: true, text:"apple", date: new Date()},
    {inProgress: true, text:"banana", date: new Date()},
    {inProgress: true, text:"coffee", date: new Date()}
]
let editingIndex = 2
let showOnlyinProgress = true;

//          // DOM // webpage
const inputEl = document.querySelector("#user-text-input-element")
const targetEl = document.querySelector("#target")
const inProgressToggleEl = document.querySelector("#inProgress-toggle")


// variables as "shortcuts"
// a way of doing something faster
// compute once, reference that "computed value" thousand times
// computing (calculating the value) thousand times
// computation?


// CREATE
inputEl.addEventListener("keyup", function(event){
    console.log(event)
    if(event.key === "Enter") {
        console.log(inputEl.value)

        const newItem = {
            inProgress:true,
            text:inputEl.value,
            date: new Date()
        }

        myList.unshift(newItem)
        render()
    }
})



// READ 


const inProgressFilter = (item) => showOnlyinProgress ? item.inProgress : true

const thisWeekFilter = (item) => {
    const today = new Date()
    const thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
    return item.date < thisWeek
}

const chronoSort = (a,b) => a.date - b.date

const listItemTemplate = (item, i) => `
        <div class="list-item item-${i} ${editingIndex === i ? "editing-active" : ""}">
            ${i})
            ${item.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            })}
            ${editingIndex === i ? 
                `<input onkeyup="handleInlineEditorKeyup(event, ${i})" type="text" value="${item.text}"></input>`
                :
                `<span ondblclick="setMeAsActivelyBeingEdited(${i})" >${item.text}</span>`
            }
            ${item.inProgress}
            <!--put the toggle inProgress/not inProgress button here-->
            <button onclick="toggleDone(${i})">✅</button>
            <button onclick="remove(${i})">🗑</button>
        </div>`

function render() {
    targetEl.innerHTML = myList
        .filter(inProgressFilter) // "if showOnly inProgress, allow only inProgress:true items through the filter"
        .filter(thisWeekFilter)
        .sort(chronoSort)
        .map(listItemTemplate)
        .join("")
}


// dynamically build UI 
// SPA single-page application 


// UPDATE


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
    myList[i].inProgress = !myList[i].inProgress
    render()
}

// DELETE
function remove(i) {
    myList.splice(i,1)
    render()
}

// FILTER OUT DONE
// A NEW PIECE OF STATE IN OUR APP 
inProgressToggleEl.addEventListener("click", function(event){
    showOnlyinProgress = !showOnlyinProgress
    inProgressToggleEl.innerText = showOnlyinProgress ? "remove filter" : "show only inProgress"
    render()
    console.log(showOnlyinProgress)
})

// "initial render" // "initial draw"
render()