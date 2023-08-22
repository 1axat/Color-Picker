const colorPickerBtn = document.querySelector(".color-picker");
const clearAll = document.querySelector(".clear-all");
const colorList = document.querySelector(".all-colors");
const pickedColors = JSON.parse(localStorage.getItem("picked-colors") || "[]");


const copyColor = (elem) => {
    elem.innerText = "Copied";
    navigator.clipboard.writeText(elem.dataset.color);
    setTimeout(() => elem.innerText = elem.dataset.color, 1000);
}

const showColor = () => {
    if(!pickedColors.length) return;
    colorList.innerHTML = pickedColors.map(color => `
        <li class="color">
            <span class="rect" style="background: ${color}; border: 1px solid ${color == "#ffffff" ? "#ccc": color}"></span>
            <span class="value hex" data-color="${color}">${color}</span>
        </li>
    `).join(""); 
    document.querySelector(".picked-colors").classList.remove("hide");

    
    document.querySelectorAll(".color").forEach(li => {
        li.addEventListener("click", e => copyColor(e.currentTarget.lastElementChild));
    });
}