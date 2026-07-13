function createElement(el , parent = body) {
    let element = document.createElement(el);
    parent.appendChild(element);
    return element;
};