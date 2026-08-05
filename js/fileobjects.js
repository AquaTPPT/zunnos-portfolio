const icons = {
    folder: {purple: "assets/icons/folder/colors/icon_folder_purple.png",
            },
    desktop: { movieBaloon: "assets/icons/movie-baloon.png",
        notepad: "assets/icons/notepad.png",
    },
};

const files = {

    file1: { 
        icon: icons.folder.purple,
        name: "ps2 spinning",
        type: "gif",
        column: 1,
        row: 1,
        description: "",
    },

    file2: {
        icon: icons.desktop.movieBaloon,
        name: "MODARN",
        url: "https://www.youtube.com/embed/W3fhAdN1J_E",
        type: "yt",
        column: 1,
        row: 2,
        description: "",
    },

    file3: {
        width: '500px',
        height: '400px',
        icon: icons.desktop.movieBaloon,
        name: "ADVENTURA",
        url: "https://www.youtube.com/embed/_lI--gszA5s?feature=share",
        type: "yt",
        column: 1,
        row: 3,
        description: "ADVENTURA.RAW foi um projeto realizado para os artistas tiotiguito e Melohmy.",
    },

    file4: {
        icon: icons.desktop.movieBaloon,
        name: "OBJETO 708",
        url: "https://www.youtube.com/embed/ZYakVz38Ros",
        type: "yt",
        column: 1,
        row: 4,
        description: "",
    },

    notepad: {
        icon: icons.desktop.notepad,
        name: "Notepad",
        url: null,
        type: "app",
        description: null,
        column: 14,
        row: 1,
        menu: function(windBody) {
            const ul = createElement("ul", windBody);
            ul.role = "menubar";
            ul.classList.add("can-hover");

            const fileLi = createElement("li", ul);
            const editLi = createElement("li", ul);
            const viewLi = createElement("li", ul);
            const helpLi = createElement("li", ul);

            fileLi.textContent = "File";
            fileLi.role = "menuitem";
            editLi.textContent = "Edit";
            editLi.role = "menuitem";
            viewLi.textContent = "View";
            viewLi.role = "menuitem";
            helpLi.textContent = "Help";
            helpLi.role = "menuitem";

            fileLi.setAttribute("aria-haspopup", "true")

        },
        script: function(windBody) {
          const div = createElement("div", windBody);
          const textarea = createElement("textarea", windBody);
          textarea.style.width = '200px';
          textarea.style.height = '100px';
          textarea.setAttribute('resize','none');
        },

/*
<div class="group" style="width: 200px">
  <label for="text32">Additional notes</label>
  <textarea id="text32" rows="8"></textarea>
</div>
*/
    } 
}
/*

menu (place later):

<ul role="menubar" class="can-hover">
  <li role="menuitem" tabindex="0" aria-haspopup="true">
    File
    <ul role="menu">
      <li role="menuitem">
        <a href="#menubar">
          Open <span>Ctrl+O</span>
        </a>
      </li>
      <li role="menuitem">
        <a href="#menubar">
          Save <span>Ctrl+S</span>
        </a>
      </li>
      <li role="menuitem" class="has-divider">
        <a href="#menubar">
          Save As... <span>Ctrl+Shift+S</span>
        </a>
      </li>
      <li role="menuitem"><a href="#menubar">Exit</a></li>
    </ul>
  </li>
  <li role="menuitem" tabindex="0" aria-haspopup="true">
    Edit
    <ul role="menu">
      <li role="menuitem"><a href="#menubar">Undo</a></li>
      <li role="menuitem"><a href="#menubar">Copy</a></li>
      <li role="menuitem"><a href="#menubar">Cut</a></li>
      <li role="menuitem" class="has-divider"><a href="#menubar">Paste</a></li>
      <li role="menuitem"><a href="#menubar">Delete</a></li>
      <li role="menuitem"><a href="#menubar">Find...</a></li>
      <li role="menuitem"><a href="#menubar">Replace...</a></li>
      <li role="menuitem"><a href="#menubar">Go to...</a></li>
    </ul>
  </li>
  <li role="menuitem" tabindex="0" aria-haspopup="true">
    View
    <ul role="menu">
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        Zoom
        <ul role="menu">
          <li role="menuitem"><button>Zoom In</button></li>
          <li role="menuitem"><button>Zoom Out</button></li>
        </ul>
      </li>
      <li role="menuitem"><a href="#menubar">Status Bar</a></li>
    </ul>
  </li>
  <li role="menuitem" tabindex="0" aria-haspopup="true">
    Help
    <ul role="menu">
      <li role="menuitem"><a href="#menubar">View Help</a></li>
      <li role="menuitem"><a href="#menubar">About</a></li>
    </ul>
  </li>
</ul>
*/