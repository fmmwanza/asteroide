(function (root) {
	
	//var zombie = new Zombie.Gun;
	var Bullet =  root.Bullet = root.Bullet || {};

	Bullet.Gun = function(){
		this.cached();
	};

	Bullet.Gun.prototype = {
		// body...
		cached: function(){
			this.number = 100;		// initial value
			this.canvas = document.getElementById("myCanvas");
	    	this.ctx = this.canvas.getContext("2d");
		},

		draw: function(x,y){
			this.ctx.fillStyle = "red";
		    this.ctx.fillRect(x, y, 5, 5);
		},

		checkNumber: function(){
		 	return this.number === 0 ? false : this.number;
		},

		fire: function(x,y, stop){
			if(this.checkNumber()){
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.ctx.save();
				this.draw(x,y);
           	    this.ctx.restore();
           	    this.number--;
           	    console.log(x);
           	    x--;
           	    if(x < 10)					//test
           	    	clearInterval(stop);
           	    return;
			}

			document.getElementById("balas").innerText = "Vc esta sem balas";
		},
		fireLoop: function(x,y) {
			// body...
			this.stop = setInterval(function(){Bullet.Gun.prototype.fire(x--,y)}, 1000);
			}
		}
})(window);