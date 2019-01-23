!> Löve Potion is a work in progress, so things may be missing. Please open an issue on the [GitHub Repository](https://github.com/TurtleP/LovePotion) if there's a feature you'd like to request.

## Trello Board

It would be rather tedious for me to list out everything that *is* compatable, but also ***horrible*** for anything that's just specific for Löve Potion. However, I made a [Trello Board](https://trello.com/b/T1FlF1sY/l%C3%B6ve-potion) from the start of making Löve Potion to show everything currently implemented and also upcoming features. It's not a roadmap.


## System Functions

- `love.system.hasInternet()` returns whether or not the system has an internet connection*
- `love.system.getRegion()` returns the region of the system (USA, Japan, etc.)
- `love.system.getUsername()` returns the name of the user running Löve Potion (or your game)

*not yet implemented

## Gamepad Constants

?> Löve Potion only uses the `love.gamepad*` callbacks for input handling (with the joycon).

### Face Buttons

|Button|Description  |
|------|-------------|
|a     | The A button|
|b     | The B button|
|y     | The Y button|
|x     | The X button|

### Directional Buttons

|Button |Description  |
|-------|-------------|
|dpup   | D-Pad Up    |
|dpdown | D-Pad Down  |
|dpright| D-Pad Right |
|dpleft | D-Pad Left  |

### Shoulder Buttons

|Button|Description    |
|------|---------------|
|l     | The L button  |
|r     | The R button  |
|zl    | The ZL button |
|zr    | The ZR button |

### Special Buttons

|Button|Description   |
|------|--------------|
|plus  | The + button |
|minus | The - button |