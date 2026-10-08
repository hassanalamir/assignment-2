import { items } from "./items.js";

export function renderItems(list) {
    const listElement = document.getElementById("list");
    listElement.replaceChildren();

    list.forEach((item) => {
        const entry = document.createElement("li");
        entry.classList.add("entry");
        entry.textContent = `${item.name} - ${item.price} EGP`;
        listElement.appendChild(entry);
    });
}

export function matching() {
    return items.filter((item) => item.category === "electronics");
}

export function start() {
    renderItems(items);
    document.getElementById("narrow").addEventListener("click", () => {
        renderItems(matching());
    });
}