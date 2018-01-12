import { getData } from './../js/scripts.js';
var apiKey = require('./../.env').apiKey;

$('document').ready(function(){
  $('#dr-form').submit(function(event){
    event.preventDefault();
    const name = $('#name-input').val();
    getData(name, function(response){
      $('#results').text(`Your result is ${response.name}`);
    }, function(){
      $('#results').text("There was an error processing your request. Please try again.")
    });
  });
});
