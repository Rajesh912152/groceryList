let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.textContent = "Glocery List";
headingEl.classList.add("heading");
bgContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);

let gloceryItems = ["Milk", "Biscuits", "Butter", "Eggs", "Rice"];

for (let gloceryItem of gloceryItems) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = gloceryItem;
    listContainerEl.appendChild(listItemEl);
}

let checkboxEl = document.createElement("input");
checkboxEl.id = "checkboxInput";
checkboxEl.type = "checkbox";
bgContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Need Home Delivery";
labelEl.setAttribute("for", "checkboxInput");
labelEl.classList.add("delivery-text");
bgContainerEl.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContainerEl.appendChild(breakEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Proceed to Pay "
bgContainerEl.appendChild(buttonEl);