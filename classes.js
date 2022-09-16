class TodoItem {
    constructor(text) {
        this.text = text
        this.date = new Date()
        this.inProgress = true
    }
}

class TodoList {
    constructor() {
        this._list = []
    }
    add(item) {
        this._list.unshift(item)
    }
    remove(i) {
        this._list.splice(i,1)
    }
    toggleDone(i) {
        this._list[i].inProgress = !this._list[i].inProgress
    }
    getItems() {
        return this._list
    }
}

const myList = new TodoList()

const targetEl = document.querySelector("#target")
const inputEl = document.querySelector("#input")
inputEl.addEventListener("keyup", function(event){
    if(event.key === "Enter") {
        const newItem = new TodoItem(inputEl.value)
        myList.add(newItem)
        render()
    }
})


function render(targetEl) {
    const myListAsHTML = this.list
        .map(function(item, i) {
            return `
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
        })
        .join("")
    targetEl.innerHTML = myListAsHTML
}