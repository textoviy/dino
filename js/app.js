"use strict";

(function() {
    document.body.style.animationName = "red";
    console.log(document.body.style.backgroundColor);
}());

var dino = document.querySelector(".dino");
console.log(dino);

(function() {

    var LEFT_KEYCODE = 37;
    var UP_KEYCODE = 38;
    var RIGHT_KEYCODE = 39;
    var DOWN_KEYCODE = 40;

    window.utils = {
        isLeftKeyCode: function(evt) {
            return evt.keyCode === LEFT_KEYCODE;
        },

        isUpKeyCode: function(evt) {
            return evt.keyCode === UP_KEYCODE;
        },

        isRightKeyCode: function(evt) {
            return evt.keyCode === RIGHT_KEYCODE;
        },

        isDownKeyCode: function(evt) {
            return evt.keyCode === DOWN_KEYCODE;
        }
    }
}());

(function() {
    function getCoords(evt) {
        //console.log(evt);
        if (window.utils.isLeftKeyCode(evt)) {

            dino.style.left = parseInt(getComputedStyle(dino).left) + (-20) + "px";
            //console.log(window.utils.isLeftKeyCode(evt));

        } else if (window.utils.isUpKeyCode(evt)) {
            dino.style.top = parseInt(getComputedStyle(dino).top) + (-20) + "px";

        } else if (window.utils.isRightKeyCode(evt)) {
            dino.style.left = parseInt(getComputedStyle(dino).left) + 20 + "px";

        } else if (window.utils.isDownKeyCode(evt)) {
            dino.style.top = parseInt(getComputedStyle(dino).top) + 20 + "px";

        }
    };

    document.body.addEventListener("keydown", getCoords);
    //console.log(11111);

    dino.addEventListener("", function() {
    	console.log(1111111);
    	// if (lastTimer) {
    	// 	clearTimeout(lastTimer);
    	// }

    	// var lastTimer = setTimeout(function() {

    	// }, 1000);
    });



}());

//getComputedStyle(dino) - получить стили

//getComputedStyle(dino).top = parseInt(getComputedStyle(dino).top) + 20 + "px";