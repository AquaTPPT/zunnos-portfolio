
function initNavbar() {

    const body = document.querySelector("body");
    const navbarContainer = createElement("div", body);

    const start = createElement("div", navbarContainer);
    const appIconContainer = createElement("div", navbarContainer);
    const navbarSettingsContainer = createElement("div", navbarContainer);


    function startMenu() {
        const startMenu = createElement("div", body);

        const startMenuLeftList = createElement("div", startMenu);
        const startMenuRightList = createElement("div", startMenu);

        startMenuLeftList.classList.add("window-body", "has-space", "startmenu-left-list");
        startMenuRightList.classList.add("startmenu-right-list");
        startMenu.classList.add("startmenu");

        for (const item of Object.entries(navbarList)) {
            let itemContainer = createElement("ul", startMenuLeftList);
            
            let itemImg = createElement("img", itemContainer);
            let itemText = createElement("p", itemContainer);

            itemContainer.classList.add("startmenu-left-list-item");
            itemImg.classList.add("startmenu-left-list-item-img");

            itemText.textContent = item[1].name;
            itemImg.src = item[1].icon;
        }

        return startMenu;
    }


    const flag = createElement("div", navbarSettingsContainer);
    const flagImg = createElement("img", flag);
    const network = createElement("div", navbarSettingsContainer);
    const networkImg = createElement("img", network);
    const volume = createElement("div", navbarSettingsContainer);
    const volumeImg = createElement("img", volume);
    const navbarDateContainer = createElement("div", navbarSettingsContainer);
    const leftButton = createElement("button", navbarSettingsContainer);
    
    navbarContainer.classList.add("navbar");

    start.classList.add("start");
    navbarSettingsContainer.classList.add("navbar-icons");
    appIconContainer.classList.add("navbar-appicons");
    navbarDateContainer.classList.add("navbardate");

    flag.classList.add("navbar-icon");
    network.classList.add("navbar-icon");
    volume.classList.add("navbar-icon");


    flagImg.classList.add("navbar-icon-img");
    networkImg.classList.add("navbar-icon-img");
    volumeImg.classList.add("navbar-icon-img");

    leftButton.classList.add("navbar-leftbutton");

    flagImg.src = "./assets/icons/navbar-icons/flag.png";
    networkImg.src = "./assets/icons/navbar-icons/network.png";
    volumeImg.src = "./assets/icons/navbar-icons/volume.png";


    startMenu();

}

function navbarDate() {
    const navbar = document.querySelector(".navbar");
    const navbarDateContainer = document.querySelector(".navbardate");
    const time = createElement("p", navbarDateContainer);
    const date = createElement("p", navbarDateContainer);

    time.classList.add("navbartime");
    date.classList.add("navbardates");

    setInterval(function() {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        if (currentDate.getHours() < 10) {
            hours = "0" + currentDate.getHours();
        }
        if (currentDate.getMinutes() < 10) {
            minutes = "0" + currentDate.getMinutes();
        }
        if (currentDate.getDate() < 10) {
            day = "0" + currentDate.getDate();
        }
        if (currentDate.getMonth() < 10) {
            month = "0" + (currentDate.getMonth() + 1);
        }

        time.textContent = hours + ":" + minutes;
        date.textContent = day + "-" + month + "-" + year;
    }, 1000);

}

initNavbar();

navbarDate();