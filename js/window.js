function createWindow(windowText, ytWindow = null) {
    const wind = createElement("div");
    const titleBar = createElement("div", wind);
    const titleBarText = createElement("div", titleBar);
    const titleBarControls = createElement("div", titleBar);
    const min = createElement("button", titleBarControls);
    const max = createElement("button", titleBarControls);
    const close = createElement("button", titleBarControls);
    const windBody = createElement("div", wind);

    if (ytWindow != null) {
        windBody.appendChild(ytWindow);
    }

    wind.classList = "window active";   
    wind.style.width = "525px";
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
};

function createYtWindow(url) {
    const video = document.createElement("iframe");

    video.src = url;
    video.style.width = "500px";
    video.style.height = "315px";
    video.style.frameborder = "0";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.allowfullscreen;
    video.style.referrerpolicy = "strict-origin-when-cross-origin";

    return video;
}
