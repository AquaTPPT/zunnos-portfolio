const table = document.querySelector("table");
const td = document.createElement("td");
table.appendChild(td);




for (let i = 0; i < files.length; i++) {
    const div = document.createElement("div");
    const fileImg = document.createElement("img");
    const fileDesc = document.createElement("p");
    
    div.className = "icons to-right";
    fileImg.style.width = "75px";
    fileDesc.className = "icon-text";

    fileImg.src = files[i].url;
    fileDesc.textContent = files[i].name;

    td.appendChild(div);
    div.appendChild(fileImg);
    div.appendChild(fileDesc);
    
    fileImg.addEventListener("click", () => div.classList.toggle("selected"))
}