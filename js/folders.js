const body = document.querySelector("body");
const table = document.querySelector("table");
const grid = createElement("div", body);
grid.classList.add("grid");

let filesContainer = [];

for (const file of Object.entries(files)) {
    
    const div = createElement("div", grid);
    const fileImg = createElement("img", div);
    const fileDesc = createElement("p", div);
    
    div.className = "icons";
    fileImg.classList.add("icon-img");
    fileDesc.className = "icon-text";

    fileImg.src = file[1].icon;
    fileDesc.textContent = file[1].name;

    div.style.gridColumn = file[1].column;
    div.style.gridRow = file[1].row;

    fileImg.addEventListener("click", function() { div.classList.add("selected");
        if (div.classList.contains("selected") ) {
            switch (file[1].type) {
                case "yt":
                    createWindow(null, null, file[1].name, null, createYtWindow(file[1].url), file[1].description);
                    break;
                case "app":
                    createWindow(file[1].width, file[1].height, file[1].name, null, null, null, file[1].type, file[1].menu, file[1].script);
                    break;
                default:
                    createWindow(file[1].width, file[1].height, file[1].name);
            }
        } 
    })

}


