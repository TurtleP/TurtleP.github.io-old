?> Please read everything carefully. Follow all necessary links and read those thoroughly. They contain important information.

## Prerequisite

Follow the instructions for [setting up a development environment](building?id=getting-started).

## Methods

?> Regardless of the method used, please use Atmosphère's title takeover functionality. This allows for your game to use all the system memory allowed along with the Software Keyboard.

### Forward

When you run Löve Potion by itself, it will first try to locate a game within its own *RomFS*, a read-only filesystem. If you did not build your game with the [template](https://github.com/TurtleP/LovePotion-examples/tree/master/templates/switch) for standalone usage (useful for custom metadata), it will default to using the 'Game Folder'. If it fails to locate that, it will show the 'No Game' screen.

Make sure you keep your Löve Potion projects in an easy-to-remember directory. Do ***not*** put any of the Löve Potion data, your games ***or*** other binaries within the `devkitPro` folder. Keep it on your Desktop or even on cloud storage, like Dropbox.

### Löve Potion Executable

Creating your {game}.lpx file is extremely simple. Open your terminal and navigate to wherever your game is stored, as long as it's within a directory (e.g. Desktop/LovePotion/SuperGame), you can run:

```bash
build_romfs SuperGame SuperGame.lpx
```

This will package the content of *SuperGame* inside its own lpx file. Having built that, [download the file association zip](/files/config.zip). Copy the `lovepotion.cfg` file to your Switch [µSD card](https://simple.wikipedia.org/wiki/MicroSD) under `/nx-hbmenu/config/fileassoc`. The `LovePotion` folder can be placed under `/switch`. The only thing missing is the latest copy of Löve Potion, so download the [latest *.nro binary](https://github.com/TurtleP/LovePotion/releases) and place it in the `LovePotion` folder.

All that's left is to copy the new *SuperGame.lpx* to the `/switch` folder on your µSD card and open the Homebrew Menu. It will now show up as an entry that you can run.

### Fused Game

Mentioned before, go to the [examples repo for the template](https://github.com/TurtleP/LovePotion-examples/tree/master/templates/switch). Next, download the [latest *.elf binary](https://github.com/TurtleP/LovePotion/releases) and place it with your projects. Let's say you put projects on the desktop, you would want it here: `Desktop/LovePotion/LovePotion.elf`. You'll want to add `LOVEPOTION_SWITCH` under your `PATH` [on Windows](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/) and on Unix-like platforms (Linux/macOS), edit your `.bashrc` and paste:

```bash
# You may replace this path to where you keep your games
export LOVEPOTION_SWITCH=$HOME/LovePotion/LovePotion.elf
```

Set the variables equal to the direct path (including the LovePotion.elf) of the binary.

Now put your files inside a `game` directory in the template's directory and run `make`. Don't forget to change the `Title`, `Author`, and `Version` data inside the Makefile. You can also change the icon. Be sure to remove the `progressive` flag when saving the new icon and the image must be exactly 256x256 pixels.

Copy the newly build *SuperGame.nro* to the µSD card under `/switch` and it will show up as an entry once you open the Homebrew Menu.

### 'Game' Folder

?> This is meant for developing your game. Use one of the prior methods when you are finished. If you want a custom game icon and title/author, package it using the template.

The quickest way to debug is through the `game` folder. Just download the [latest *.nro binary](https://github.com/TurtleP/LovePotion/releases) and put it under `/switch/LovePotion` (create the `LovePotion` directory if it doesn't exist).

Create a directory inside of `/switch/LovePotion` called `game` and then copy all your source files into it. Open the Homebrew Menu and run the Löve Potion entry and it will run your game!