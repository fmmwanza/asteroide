var gameLoop = new Zombie.Gun();
var shoot =  new Bullet.Gun();
var stop = null;
var x = 150;
var y = 80;
	 
function keyboardControl(e) {
 	
 	var angle =0;
	switch(e.keyCode){

	case 38 : angle = 4; 				// Up
	gameLoop.rotate(angle);
	break;

	case 40 : angle = -4;				// down
	gameLoop.rotate(angle);
	break;

	case 32 : 
	   stop = setInterval(function(){shoot.fire(x--,y, stop)}, 100);
	break;

	}
}

function shooting (argument) {
	// body...
}

document.addEventListener('keydown', keyboardControl, false);
