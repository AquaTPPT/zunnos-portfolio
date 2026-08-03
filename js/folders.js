const body = document.querySelector("body");
const table = document.querySelector("table");
const td = createElement("td");

let filesContainer = [];

for (const file of Object.entries(files)) {
    
    const div = createElement("div", td);
    const fileImg = createElement("img", div);
    const fileDesc = createElement("p", div);
    
    div.className = "icons to-right";
    fileImg.style.width = "75px";
    fileDesc.className = "icon-text";

    fileImg.src = file[1].icon;
    fileDesc.textContent = file[1].name;

    fileImg.addEventListener("click", function() { div.classList.add("selected");
        if (div.classList.contains("selected") ) {
            switch (file[1].type) {
                case "yt":
                    createWindow(file[1].name, null, createYtWindow(file[1].url));
                    break;
                default:
                    createWindow(file[1].name);
            }
        } 
    })

}