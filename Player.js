/*function Player() {
}

Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};*/

function Gun(){

};

Gun.prototype.init = function () { // Aqui se deve chamar o canvas e desenhar a arma
	return true;
};

Gun.prototype.novo = function (name) {
	return true;
}

Gun.prototype.shoot = function (bullet){
	return 0;
};

Gun.prototype.load = function( bullet) {
	// body...
};

(function(root, $) {

    var Flip = root.Flip = root.Flip || {};

    Flip.Login = function(params) {
        this._cachedVariables(params);
        this._requestAPI($.proxy(this._verifyLoggedIn, this));
    };

    Flip.Login.prototype = {
        _cachedVariables: function(params) {
            this.url = params.url;
            this.idProduct = '' + params.idProduct;
            this.successful = params.successful;
        },

        _requestAPI: function(callback) {
            var random = Math.floor((Math.random()*10));
            var site = global.instance === 'PIO' ? 'PI' : global.instance;
            var queryString = 'site=' + site + '&nq=' + random;
            var url = 'http://servicos.clicrbs.com.br/EdicaoImpressaService/jsp/authorization-proxy.jsp?' + queryString;

            $.get(url, callback);
        },

        _verifyLoggedIn: function(data) {
            var isLoggedIn = data.accessAllowed;
            
            var method = isLoggedIn ? 'successful' : '_showLoginPage';
            this[method]();
        },

        _showLoginPage: function() {
            var urlLoggedIn = 'http://www.clicrbs.com.br/paidcontent/jsp/' +
                              'login.jspx?site={{ ID }}&url={{ URL }}&previousurl={{ URL }}';
            urlLoggedIn = urlLoggedIn.replace('{{ ID }}', this.idProduct);
            urlLoggedIn = urlLoggedIn.replace(/{{ URL }}/g, this.url);

            root.location = urlLoggedIn;
        }
    };

    Flip.Paywall = function() {
        this.getPaywall(this.executeLogin);
    };

    Flip.Paywall.prototype = {
        getPaywall: function(callback) {
            var url = '/EdicaoImpressaService/publication/{{ ID }}';
            var id = global.instance.toLowerCase();
            url = url.replace('{{ ID }}', id);

            var request = function(data) {
                var hasPaywall = data.result.paid;

                if(hasPaywall) {
                    return callback();
                }

                return Flip.main();
            };

            $.get(url, request);
        },

        executeLogin: function() {
            new Flip.Login({
                url : location.href,
                idProduct : global.id,
                successful : Flip.main
            });
        }
    };

    $(function() {
        new Flip.Paywall();
    });

}(window, jQuery));
