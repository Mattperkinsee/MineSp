//End simple fade in page//
//Simple fade in page//
// document.body.className += ' fade-out';
// $(function() {
//     $('body').removeClass('fade-out');
// });
//Animations with animate.css//
$( document ).ready(function() {
    
const bounce = ["animated", "bounce"];
const fadeIn = ["animated", "fadeIn"];
const pulse = ["animated", "pulse"];
// var button = document.getElementsByClassName('featured-view-store element_button');
var logos = document.getElementsByClassName('m_html');
var serverAdd = document.getElementsByClassName('serverAddress');
 serverAdd[0].classList.add(...pulse);
// logos[0].classList.add(...pulse);
// button[0].classList.add(...fadeIn);

});