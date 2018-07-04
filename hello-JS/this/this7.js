"use strict"

var a = 10;
var oDiv = document.querySelector('#test');
/* 
oDiv.onclick = function() {
    var a = 20;
    console.log( this );
} */

oDiv.addEventListener('click', function() {
    var a = 20;
    console.log( this );
})