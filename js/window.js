function createWindow(windowText) {
    const wind = createElement("div");
    const titleBar = createElement("div");
    const titleBarText = createElement("div");
    const titleBarControls = createElement("div");
    const min = createElement("button");
    const max = createElement("button");
    const close = createElement("button");
    const windBody = createElement("div");

    wind.classList = "window active";
    wind.style.maxWidth = "300px";

    titleBar.classList = "title-bar";

    titleBarText.classList = "title-bar-text";
    titleBarText.textContent = windowText;

    titleBarControls.classList = "title-bar-controls";
    max.ariaLabel = "Minimize";
    min.ariaLabel = "Maximize";
    close.ariaLabel = "Close";

    windBody.classList = "window-body has-space";

    body.appendChild(wind);
    
    wind.appendChild(titleBar);
    wind.appendChild(windBody);

    titleBar.appendChild(titleBarText);
    titleBar.appendChild(titleBarControls);

    titleBarControls.appendChild(min);
    titleBarControls.appendChild(max);
    titleBarControls.appendChild(close);
};