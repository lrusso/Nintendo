# Nintendo

Nintendo Emulator developed in JavaScript.

![alt screenshot](https://raw.githubusercontent.com/lrusso/Nintendo/master/Nintendo1.png)

## Web:

https://lrusso.github.io/Nintendo/Nintendo.htm

## Main differences with JSNES:

* Mapper 4 fixed.
* Audio working on Safari.
* Be able to reset the game.
* Be able to mute/unmute the game audio.
* Mobile compatibility (virtual joystick and buttons).
* Adding support for Mapper 240 (https://github.com/bfirsh/jsnes/pull/441).
* Adding support for Mapper 241 (https://github.com/bfirsh/jsnes/pull/438).
* Improve frame loop performance by 15-20% (https://github.com/bfirsh/jsnes/pull/436).
* Minor accuracy fixes pertaining to audio and rendering (https://github.com/bfirsh/jsnes/pull/425).
* Pausing and resuming the game if the window is on focus or not.
* Progressive Web App compatible with Android and iOS devices.

## How did I fix the Mapper 4?

- Open the ```src/mappers.js``` file and modify the following:

```diff
// Load swappable PRG banks (0x8000 and 0xA000):
- this.load8kRomBank(0, 0x8000);
- this.load8kRomBank(1, 0xa000);
+ this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 0x8000);
+ this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 0xa000);
```

## This emulator has mobile compatibility

![alt screenshot](https://raw.githubusercontent.com/lrusso/Nintendo/master/Nintendo2.png)

## Title generator:

https://lrusso.github.io/Nintendo/NintendoTitle.htm

## Virtual joystick code:

https://github.com/lrusso/VirtualJoystick

## Based on the work of:

https://github.com/bfirsh/jsnes
