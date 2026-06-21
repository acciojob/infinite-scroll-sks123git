const list = document.getElementById("infi-list");
let count = 0;

function addItems(n) {
    for (let i = 0; i < n; i++) {
        count++;

        const li = document.createElement("li");
        li.textContent = `Item ${count}`;

        list.appendChild(li);
    }
}

addItems(10);

list.addEventListener("scroll", () => {
    if (
        list.scrollTop + list.clientHeight >=
        list.scrollHeight - 5
    ) {
        addItems(2);
    }
});