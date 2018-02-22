/*
* Page loaded, fade games IN
*/

var gameData =
{
	"Hax0r": {
		"description": "Made during Ludum Dare #33. As a virus, you quickly discover the truth of what being a monster really means",
		"icon": "./images/games/hax0r.png",
		"id": "hax0r",
		"urls": {

		}
	},

	"Idiot": {
		"description": "Idiot wakes up imprisoned in an underground tower, where Turtle has imprisoned him.",
		"icon": "./images/games/idiot.png",
		"id": "idiot",
		"urls": {

		}
	},

	"LovePotion": {
		"description": "A port of LOVE2D for Nintendo 3DS",
		"icon": "./images/games/love.png",
		"id": "lovepotion",
		"urls": {

		}
	},

	"Pegs: Lua Edition": {
		"description": "A remake of Pegs from the TI-84 with LOVE",
		"icon": "./images/games/pegs.png",
		"id": "pegs",
		"urls": {

		}
	},
	
	"Space Fruit": {
		"description": "During HackRU 2015, three friends and I made a game that put together Asteroids and Fruit Ninja.",
		"icon": "./images/games/space-fruit.png",
		"id": "space-fruit",
		"urls": {
			"windows": "https://github.com/TurtleP/SpaceFruit/releases/download/v1.3/spacefruit-windows.zip",
			"apple": "https://github.com/TurtleP/SpaceFruit/releases/download/v1.3/spacefuit.app.zip",
			"linux": "https://github.com/TurtleP/SpaceFruit/releases/download/v1.3/spacefruit.love",
			"gamepad": "https://github.com/TurtleP/SpaceFruit/releases/download/v1.3/spacefruit-3ds.zip"
		},
	},
 
	"Turtle: Invaders": {
		"urls": {
			"windows": "https://github.com/TurtleP/Turtle-Invaders/releases/",
			"apple": "https://github.com/TurtleP/Turtle-Invaders/releases/",
			"linux": "https://github.com/TurtleP/Turtle-Invaders/releases/",
			"gamepad": "https://github.com/TurtleP/Turtle-Invaders/releases/"
		},
		"id": "turtle-invaders",
		"description": "A fixed-axis shooter with netplay co-op. Shoot at and destroy bats to earn points.",
		"icon": "./images/games/turtle-invaders.png"
	},

	"Turtle Tale": {
		"description": "The phoenix has burnt the turtle's home down, and everything is ruined.",
		"urls": "##",
		"id": "turtle-tale",
		"icon": "./images/games/turtle-tale.png"
	}
};

$(document).ready(function(){
	var wrapper = document.getElementById("game-wrap");

	for (key in gameData) {
		//game container
		var child = document.createElement("div");
		child.className = "game";
		child.id = gameData[key].id;

		if (gameData[key].hasOwnProperty("icon")) {
			var background = document.createElement("img");
			background.src = gameData[key].icon;
			background.id = child.id + "-bg";
			background.style.zIndex = "-1";
			background.style.position = "absolute";
			background.style.top = "0";
			background.style.left = "0";

			child.appendChild(background);
		}

		//game title
		var title = document.createElement("div");
		title.className = "title"
		title.innerHTML = key;
		title.id = child.id + "-title";

		child.appendChild(title);

		
		//game description
		var description = document.createElement("div");
		description.className = "description";
		description.id = child.id + "-description";
		description.innerHTML = gameData[key].description || "";

		child.appendChild(description);

		//downloads
		if (gameData[key].urls == "##") {//coming soon™
			var soon = document.createElement("div");

			soon.className = "comingsoon";
			soon.innerHTML = "Coming Soon!";

			child.appendChild(soon);
		} else {
			var downloadBar = document.createElement("div");
			downloadBar.className = "downloads";
			downloadBar.id = child.id + "-downloads";
		
			for (os in gameData[key].urls) {
				var icon = document.createElement("div");

				icon.className = "os fa fa-" + os + " fa-2x";
				icon.id = child.id + "-" + os;

				var downloadButton = document.createElement("a");
				downloadButton.href = gameData[key].urls[os];
				downloadButton.id = child.id + "-" + os + "-download";

				downloadButton.appendChild(icon);

				downloadBar.appendChild(downloadButton);
			}

			child.appendChild(downloadBar);
		}
		
		wrapper.appendChild(child);
	};

	var lastID, lastElement;
	
	var isMobile = window.matchMedia("screen and (max-width: 480px)");
	
	for (key in gameData) {
		var childID = gameData[key].id;
		
		if (isMobile == true) {
			$("#" + childID + "-bg").style.animation = "blur 1s linear";

			$("#" + childID + "-title").fadeIn({ queue: false, duration: 'slow' })
			$("#" + childID + "-description").fadeIn({ queue: false, duration: 'slow' })
			$("#" + childID + "-downloads").fadeIn({ queue: false, duration: 'slow' })
		} else {
			$("#" + childID + "-title").fadeOut({ queue: false, duration: 0 });
			$("#" + childID + "-description").fadeOut({ queue: false, duration: 0 });
			$("#" + childID + "-downloads").fadeOut({ queue: false, duration: 0 });

			var child = document.getElementById(childID);

			//hover
			child.addEventListener("mouseenter", function(event) {
				var id = this.id;

				$("#" + id + "-bg").get(0).style.animation = "blur 0.5s forwards";

				$("#" + id + "-title").fadeIn({ queue: false, duration: 'slow' })
				$("#" + id + "-description").fadeIn({ queue: false, duration: 'slow' })

				$("#" + id + "-downloads").fadeIn({ queue: false, duration: 'slow' })

				lastID = id;
				lastElement = this;
			});

			child.addEventListener("mouseleave", function (event) {
				var id = lastID;

				$("#" + id + "-bg").get(0).style.animation = "unblur 0.5s forwards";

				$("#" + id + "-title").fadeOut({ queue: false, duration: 'slow' });
				$("#" + id + "-description").fadeOut({ queue: false, duration: 'slow' });
				$("#" + id + "-downloads").fadeOut({ queue: false, duration: 'slow' });
			});
		}
	}
})