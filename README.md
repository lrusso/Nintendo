# Nintendo

A Nintendo emulator written entirely in JavaScript (no WebAssembly). Simply open the link below, click the red icon, and select a ROM file in `NES` format from your computer; it will be loaded and booted automatically.

## Links:

- [Nintendo emulator](https://lrusso.github.io/Nintendo/Nintendo.htm)
- [Demo booting a sample game](https://lrusso.github.io/Nintendo/Nintendo.htm?demo)

## Screenshots:

![alt screenshot1](https://lrusso.github.io/Nintendo/SCREENSHOT1.jpg)

![alt screenshot2](https://lrusso.github.io/Nintendo/SCREENSHOT2.jpg)

![alt screenshot3](https://lrusso.github.io/Nintendo/SCREENSHOT3.jpg)

## How to use it:

Examples of loading local and online files can be found [here](https://github.com/lrusso/Nintendo/blob/main/Nintendo.htm#L120-L158) and [here](https://github.com/lrusso/Nintendo/blob/main/Nintendo.htm#L169-L201).

```js
embedNintendo({
  container: "game",
  name: "Concentration Room",
  rom: romFile,
  player1: {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
    select: "a",
    start: "s",
    a: "x",
    b: "z",
  },
  player2: {
    up: "Num-8",
    down: "Num-2",
    left: "Num-4",
    right: "Num-6",
    select: "Num-1",
    start: "Num-3",
    a: "Num-7",
    b: "Num-9",
  },
  cbStarted: function () {
    console.log("Emulator started.")
  },
})
```

| Parameter |    Type     | Required | Default value | Description               |
| :-------- | :---------: | :------: | :-----------: | :------------------------ |
| container |   string    |   yes    |       –       | Target element ID.        |
| name      |   string    |   yes    |       –       | Game name.                |
| rom       | ArrayBuffer |   yes    |       –       | ROM file.                 |
| player1   |   object    |    no    |       –       | Player 1 keys.            |
| player2   |   object    |    no    |       –       | Player 2 keys.            |
| cbStarted |  function   |    no    |       -       | Called on emulator start. |

## Special keys:

| Action          | macOS Shortcut | Windows Shortcut | Safari Shortcut |
| :-------------- | :------------: | :--------------: | :-------------: |
| Save state      |  Command + 1   |     Ctrl + 1     |    Ctrl + 1     |
| Load state      |  Command + 2   |     Ctrl + 2     |    Ctrl + 2     |
| Toggle sound    |  Command + 3   |     Ctrl + 3     |    Ctrl + 3     |
| Fullscreen mode |  Command + F   |     Ctrl + F     |    Ctrl + F     |

## Roadmap:

| Game                           | Issue                                                 |
| :----------------------------- | :---------------------------------------------------- |
| Star Wars                      | Sometimes hangs when pressing START during the intro. |
| Teenage Mutant Ninja Turtles 2 | Improve rendering.                                    |
| Teenage Mutant Ninja Turtles 3 | Improve rendering.                                    |

## Main differences with the original project:

- Added logic to load states.
- Added logic to save states.
- Added logic to toggle sound.
- Removed the horizontal black bars.
- Fixed support for Mapper 4 ([bfirsh/jsnes#452](https://github.com/bfirsh/jsnes/pull/452/commits/850b69a6b6d96b783caf736310471b4eee971a50)).
- Added support for Mapper 240 (https://github.com/bfirsh/jsnes/pull/441).
- Added support for Mapper 241 (https://github.com/bfirsh/jsnes/pull/438).
- Added code for improving performance by 15-20% (https://github.com/bfirsh/jsnes/pull/436).
- Fixed minor accuracy related to audio and rendering (https://github.com/bfirsh/jsnes/pull/425).
- Implemented logic for pausing the emulator on blur and resuming on focus.
- Implemented a workaround that replaced ScriptProcessorNode (deprecated).
- Migrated the build to code compatible with pre-ECMAScript 2015 environments.

## Based on the work of:

https://github.com/bfirsh/jsnes
