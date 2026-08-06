const icons = {
    folder: {purple: "assets/icons/folder/colors/icon_folder_purple.png",
            },
    desktop: { movieBaloon: "assets/icons/system/movie-baloon.png",
        notepad: "assets/icons/system/notepad.png",
        myComputer: "assets/icons/system/computer.png",
        mediaPlayer: "assetss/icons/system/media-player.png",
        help: "assets/icons/system/help.png",
        paint: "assets/icons/system/paint.png",
        trash: "assets/icons/system/trash.png",
        explorer: "assets/icons/system/file-explorer.png",
        controlPanel: "assets/icons/system/control-panel.png",
        commandPrompt: "assets/icons/system/command-prompt.png",
        defaultApps: "assets/icons/system/default-apps.png",
        internetExplorer: "assets/icons/system/internet-explorer.png"
    },
};

const navbarList = {
  l1: { name: "Paint",
        icon: icons.desktop.paint
      },
  l2: { name: "Notepad",
        icon: icons.desktop.notepad
      },
  l3: { name: "Internet Explorer",
        icon: icons.desktop.internetExplorer
      },
  l4: { name: "Windows Media Player",
        icon: icons.desktop.mediaPlayer
      },
  l5: { name: "Calculator",
        icon: icons.desktop.calculator
      },
  l6: { name: "Trash",
        icon: icons.desktop.trash
      },
  l7: { name: "File Explorer",
        icon: icons.desktop.explorer
      },
  l8: { name: "Control Panel",
        icon: icons.desktop.controlPanel
      },
  l9: { name: "Command Prompt",
        icon: icons.desktop.commandPrompt
      },
}

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
        url: "./assets/docs/videos/MODARN Short(1).mp4",
        type: "video",
        column: 1,
        row: 2,
        description: "",
    },

    file3: {
        width: '500px',
        height: '400px',
        icon: icons.desktop.movieBaloon,
        name: "ADVENTURA",
        url: "./assets/docs/videos/ADVENTURA.raw Short.mp4",
        type: "video",
        column: 1,
        row: 3,
        description: "ADVENTURA.RAW foi um projeto realizado para os artistas tiotiguito e Melohmy.",
    },

    file4: {
        icon: icons.desktop.movieBaloon,
        name: "OBJETO 708",
        url: "./assets/docs/videos/OBJETO 708 Short.mp4",
        type: "video",
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

    } 
}

const navbarItems = {
    name: "Zunno",
    l1: "Documents",
    l2: "Pictures",
    l3: "Music",
    l4: "Games",
    l5: "Computer",
    l6: "Control Panel",
    l7: "Devices and Printers",
    l8: "Default Programs",
    l9: "Help and Support"
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