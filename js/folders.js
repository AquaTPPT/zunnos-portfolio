const body = document.querySelector("body");
const table = document.querySelector("table");
const td = createElement("td");

let filesContainer = [];

for (let i = 0; i < files.length; i++) {
    const div = createElement("div", td);
    const fileImg = createElement("img", div);
    const fileDesc = createElement("p", div);
    
    div.className = "icons to-right";
    fileImg.style.width = "75px";
    fileDesc.className = "icon-text";

    fileImg.src = files[i].icon;
    fileDesc.textContent = files[i].name;

    fileImg.addEventListener("click", function() { div.classList.add("selected");
        if (div.classList.contains("selected") ) {
            switch (files[i].type) {
                case "yt":
                    createWindow(files[i].name, createYtWindow(files[i].url));
                    break;
                default:
                    createWindow(files[i].name);
            }
        } 
    })
}