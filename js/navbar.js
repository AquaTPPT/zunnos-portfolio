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
        date.textContent = day + "/" + month + "/" + year;
    }, 1000);
}


navbarDate();