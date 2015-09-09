'use strict';
var Preloader = require('../modules/Preloader');

var colors = require('../colors');
var config = require('../config');
// bring in handlebars file
// var template = require('../templates/name-of-handlebars-file.hbs');
// var content = require('name-of-your-json-file.json');
// console.log(content);

// ad constructor
var Site = function() {

  // use render() to bring in dynamic content
  // this.render();

  // preloads images then runs animation
  this.loader = new Preloader();
 
  //this.imagesAreLoaded();

};

// render method for dynamic content using handlbars
// Site.prototype.render = function() {

//   this.body = document.querySelector('body');
//   this.body.innerHTML = template(content);

// };

module.exports = Site;
