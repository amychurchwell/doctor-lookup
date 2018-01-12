import { getData } from './../js/scripts.js';
var apiKey = require('./../.env').apiKey;

$('document').ready(function(){
  $('#dr-form').submit(function(event){
    event.preventDefault();
  });
});
