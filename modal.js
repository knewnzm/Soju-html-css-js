

const modal = document.querySelector("#modal");
const addBtn = document.querySelector("#add");
const submit = document.querySelector("#submit");
const form = document.querySelector("#addItemForm");
const closeBtn = document.querySelector("#closeModal");

function openModal() {
    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}

function addItem(family, image, name) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
                    <img src="${image}" alt="${family}" />
                    <span>${name}</span>
                    `
    document.querySelector(".cat").appendChild(div);

    const span = document.createElement("span");
    span.innerHTML = name;
    document.querySelector(".side-bar").appendChild(span);
}

function addItemHandle(event){
    event.preventDefault();
    const family = document.querySelector("#fam").value;
    const image = document.querySelector("#image").value;
    const name = document.querySelector("#name").value;
    addItem(family, image, name);
    closeModal();
}


addBtn.addEventListener("click", openModal);
form.addEventListener("submit", addItemHandle);
closeBtn.addEventListener("click", closeModal);

