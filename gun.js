
(function(root){

	var Zombie = root.Zombie = root.Zombie || {};
	var z = null;
	var angle = 0;
	var canvasX = 150;
	var canvasY = 80;
	var cache = this;
	var id = document.getElementById("myCanvas");
	var ctx = id.getContext("2d");


	Zombie.Gun = function(){
	} ;

	Zombie.Gun.prototype = {
		init : function(){

		},
		draw : function(){
			ctx.save();
			ctx.fillStyle = "red";
			ctx.fillRect(canvasX , canvasY, 5, 10);

		},
		novo : function(){

		},
		shoot : function(){

		},
		load : function(){

		},
		rotate: function(){
			angle = angle % 360;
		    ctx.clearRect(0, 0, id.width, id.height);

		    ctx.save();
		    ctx.fillStyle = "#FF0000";

		    ctx.translate(canvasX,canvasY);
		    	debugger;
		    ctx.rotate(angle*Math.PI/180 );  // rotate 90 degrees
		    ctx.translate(-canvasX,-canvasY);
		    console.log(ctx + ' -- ' + ctx);
		    Zombie.Gun.prototype.draw();
            ctx.restore();

           // requestAnimationFrame(function() {
			//Zombie.Gun.prototype.keyboardControl();
			//});

		 },
		 keyboardControl : function(event){

			switch(event.keyCode){

			case 38 : angle = 4; 				// Up
			Zombie.Gun.prototype.rotate();
			break;

			case 40 : angle = -4;				// down
			Zombie.Gun.prototype.rotate();
			break;

			case 32 : angle = angle;
			break;

			}
		}
	};

	z = Zombie.Gun.prototype;
	z.draw();
	z.rotate();

})(window);


