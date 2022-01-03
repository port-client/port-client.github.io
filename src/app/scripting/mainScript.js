import ToDoItem from './todoitem';
import ToDoList from './todolist';

const toDoList = new ToDoList();

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // Add Listeners
    const itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    })
    // Procedural
    // load list object from persistent data
    // refresh the page
    refreshThePage();
}

const refreshThePage = () => {
    clearListDisplay();
    renderList();
    clearItemEntryField();
    setFocusOnItemEntry();
}

const clearListDisplay = () => {
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
}

const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;

    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

const renderList = () => {
    const list = toDoList.getList();
    list.forEach(item => {
        buildListItem(item);
    })
}

const buildListItem = (item) => {
    const divHolder = document.createElement("div");
    div.className = "app-l-list-item";
    const div = document.createElement("div");
    div.className = "app-c-checkbox";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = item.getId();
    check.tabIndex = 0;

    addClickListenerToCheckbox();
    
    const label = document.createElement("label");
    label.htmlFor = item.getId();
    // label.textContent = item.getItem();

    const span = document.createElement("span");
    span.className = "app-c-checkbox-label"
    span.textContent = item.getItem();

    const icon = document.createElement("span");
    icon.className = "app-c-checkbox-icon"
    icon.textContent = item.getItem();

    divHolder.appendChild(div);
    div.appendChild(label);
    label.appendChild(check);
    label.appendChild(span);
    label.appendChild(icon);
}

const addClickListenerToCheckbox = (checkbox) => {
    checkbox.addEventListener("click", (event) => {
        toDoList.removeItemFromList(checkbox.id);
        // TODO: REMOVE FROM LOCAL STORAGE

        setTimeout(() => {
            refreshThePage();
        }, 1000);
    })
}

const clearItemEntryField = () => {
    document.getElementById("newItem").value = "";
}

const setFocusOnItemEntry = () => {
    document.getElementById("newItem").focus();
}

const processSubmission = () => {
    const newEntryText = getNewEntry();
    if(!newEntryText.length) return;
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.addItemToList(toDoItem);

    // TODO: Update persistent data local storage.

    refreshThePage();
}

const getNewEntry = () => {
    return document.getElementById("newItem").value.trim("");
}

const calcNextItemId = () => {
    let nextItemId = 1;
    const list = toDoList.getList();
    if(list.length > 0) {
        nextItemId = list[list.length - 1].getId() + 1;
    } else {
        return nextItemId;
    }
}

const createNewItem = (itemId, itemText) => {
    const toDo = new ToDoItem();
    toDo.setId(itemId);
    toDo.setItem(itemText);
    return toDo;
}