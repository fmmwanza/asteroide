(function (root) {
	
	var zombie = new Zombie.Gun;
	var Bullet =  root.Bullet = root.Bullet || {};

	Bullet.Gun = function(){
		this.number = 100;		// initial value
		this.canvas = document.getElementById("myCanvas");
	    this.ctx = canvas.getContext("2d");
	};

	Bullet.Gun.prototype = {
		// body...
		draw: function(x,y){
			this.ctx.fillStyle = "red";
		    this.ctx.fillRect(x, y, 2, 2);
		},

		checkNumber: function(){
		 	return this.number === 0 ? 0 : this.number;
		},

		fire: function(x,y){
			if(!this.checkNumber()){
				document.getElementById("balas").innerText = "Vc esta sem balas";
			}
			else{	// fire
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.ctx.save();
				this.draw();
           	    this.ctx.restore();
			}



		}
	  };
	};



})(window);