
'use strict';

var colors = require('../colors');
var TweenLite = require('TweenMax');
// var TweenLite = require('TweenLite');
// var TimelineLite = require('TimelineLite');
// var CSSPlugin = require('CSSPlugin');
// var EasePack = require('EasePack');

// animation controller object constructor
var AnimationController = function() {

  this.flower = document.querySelector('.flower');
  this.header = document.querySelector('h1');
  this.copy = document.querySelector('p');
  this.torres = document.querySelector('span');
  this.greeter = document.querySelector('.greeter')
  
  this.init();

};

AnimationController.prototype.firstAnimation = function() {

  var tl = new TimelineMax();

  tl.to (this.header, 0.75, {autoAlpha: 1, top: 0, ease: Power2.easeOut}, 0.25);
  tl.to (this.copy, 0.75, {autoAlpha: 1, top: 0, ease: Power2.easeOut}, 0.5);
  tl.to (this.torres, 0.75, {autoAlpha: 1, top: 0, ease: Power2.easeOut}, 0.75);
  tl.staggerTo ('.flower', 0.75, {autoAlpha: 1, top: '90%', ease: Power2.easeOut},0.2, 0.8);

  
  return tl;

};

// initialize banner
AnimationController.prototype.init = function() {

  console.log('%c:: animation init ::', colors.red);

  this.tl = new TimelineMax({paused: true});

  this.tl.add(this.firstAnimation());

  return this.tl;

};

// start animation
AnimationController.prototype.start = function() {

  this.tl.play();
  console.log('%c:: animation start ::', colors.green);

};

module.exports = AnimationController;
