
(function(root){

	var Zombie = root.Zombie = root.Zombie || {};

	Zombie.Gun = function() {
		this.cached();
		this.draw();
	};

	Zombie.Gun.prototype = {

		cached: function() {
			this.angle = 0;
			this.canvasX = 150;
			this.canvasY = 80;
			this.canvas = document.getElementById("myCanvas");
			this.ctx = this.canvas.getContext("2d");
		},

		draw : function(){
			this.ctx.save();
			this.ctx.fillStyle = "black";
			this.ctx.fillRect(this.canvasX, this.canvasY, 5, 10);

		},
		novo : function(){

		},
		shoot : function(){

		},
		load : function(){

		},
		rotate: function(angleRotate){
			//console.log(this.angle);
			var angle = angleRotate % 360;
		    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		    this.ctx.save();
		    this.ctx.fillStyle = "#FF0000";
		    this.ctx.translate(this.canvasX,this.canvasY);
		    this.ctx.rotate(angle*Math.PI/180 );  // rotate 90 degrees
		    this.ctx.translate(-this.canvasX,-this.canvasY);
		   // console.log(ctx + ' -- ' + ctx);
		    this.draw();
            this.ctx.restore();
		 },
		 keyboardControl : function(e){
		 	
		 	var angle =0;
			switch(e.keyCode){

			case 38 : angle = 4; 				// Up
			gameLoop.rotate(angle);
			break;

			case 40 : angle = -4;				// down
			gameLoop.rotate(angle);
			break;

			case 32 : angle = angle;	// fire !!!
			break;

			}
		},
		events : function(){
			document.addEventListener('keydown', this.keyboardControl, false);
		}
	};

	var gameLoop = new Zombie.Gun();
	gameLoop.events();

})(window);


