

function createWindow(width = 'fit-content', height = 'fit-content', windowText, url, ytWindow, text, type, menu, script) {

    const wind = createElement("div");
    const titleBar = createElement("div", wind);
    const titleBarText = createElement("div", titleBar);
    const titleBarControls = createElement("div", titleBar);
    const min = createElement("button", titleBarControls);
    const max = createElement("button", titleBarControls);
    const close = createElement("button", titleBarControls);
    const windBody = createElement("div", wind);

    windBody.style.width = width;
    windBody.style.height = height;


    if (ytWindow != null) {
        windBody.appendChild(ytWindow);
    }

    wind.classList = "window active";
    wind.style.position = "absolute"

    titleBar.classList = "title-bar";

    titleBarText.classList = "title-bar-text";
    titleBarText.textContent = windowText;

    titleBarControls.classList = "title-bar-controls";
    min.ariaLabel = "Minimize";
    max.ariaLabel = "Maximize";
    close.ariaLabel = "Close";

    windBody.classList = "window-body has-space";

    close.addEventListener("click", () => wind.remove() );

    // refactor later on
    titleBar.onmousedown = function(event) {

        let shiftX = event.clientX - wind.getBoundingClientRect().left;
        let shiftY = event.clientY - wind.getBoundingClientRect().top;

        wind.style.zIndex = 1000;
        document.body.append(wind);        
        
        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            wind.style.left = pageX - shiftX + 'px';
            wind.style.top = pageY - shiftY + 'px';
        }
        // moves the wind at (pageX, pageY) coordinates
        // taking initial shifts into account



        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // move the wind on mousemove
        document.addEventListener('mousemove', onMouseMove);

        // drop the wind, remove unneeded handlers
        wind.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            wind.onmouseup = null;
        };

    };

    wind.ondragstart = function() {
        return false;
    };

    wind.onmousedown = function(event) {

        let windRightCorner = event.clientX + wind.getBoundingClientRect().right;
        let windBottomCorner = event.clientY + wind.getBoundingClientRect().bottom;

        console.log(windRightCorner);
        console.log(windBottomCorner);

        function resize(width, height) {
            wind.style.width += width;
            wind.style.height += height;
        }

        document.body.append(wind);

        function onMouseMove(event) {
            resize(windRightCorner, windBottomCorner);
        }

        document.addEventListener("mousemove", onMouseMove);
    }

    if (type == "app") {
        script(windBody);
    }

    if (text != null) {
        const textContainer = createElement('div', windBody);
        const h1 = createElement("h1", textContainer);
        const p = createElement("p", textContainer);
        
        textContainer.classList.add('window-text-container');
        p.textContent = text;
    }

};

function createVideoWindow() {
    const video = document.createElement("video");
    
    video.href= '';
}

function createYtWindow(url) {
    const video = document.createElement("iframe");

    video.style.width = '600px';
    video.style.height = '300px';
    video.src = url;
    video.style.frameborder = "0";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.allowfullscreen;
    video.style.referrerpolicy = "strict-origin-when-cross-origin";

    return video;
}