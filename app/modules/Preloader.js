'use strict';

var AnimationController = require('../modules/AnimationController');

var Preloader = function() {

	var LoadImages = LoadImages || function(a, d, z) {
		a instanceof Array || (a = [a]);
		for (var e = a.length, f = 0, g = e; g--;) {
			var b = document.createElement("img");
			b.onload = function() {
				f++; 
				f >= e && isFunction(d) && d(z)
			};
			b.src = a[g]; 
		}
	}

	var isFunction = isFunction || function(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	// when images are loaded, do something
	LoadImages([
		'images/bg-wood.jpg',
		'images/flower-pink.gif',
		'images/flower-red-sml.gif',
		'images/flower-rose.gif'
		
	], this.imagesAreLoaded() );

};

Preloader.prototype.imagesAreLoaded = function() {

		TweenMax.to('.flower-container', 0.25, {
			display: 'block',
			autoAlpha: 1,
			ease: Linear.easeNone,
			onComplete: function(){
				this.animate = new AnimationController();
				this.animate.start();
			}
		})

		

};

module.exports = Preloader;