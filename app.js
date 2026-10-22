
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.onclick = function() {
    let li = document.createElement("li");
    if (inp.value.trim() === "") return;
    li.textContent = inp.value;
    list.appendChild(li);
    inp.value = "";
};
