import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#dr-form').submit(function(event) {
    event.preventDefault();
    let name = $('#name-input').val();
    let apiKey = require('./../.env').apiKey;
    $('#name-input').val("");
    getData(name, apiKey, function(response) {
      $('#results').text(`Your result is ${response.data[0].practices[0].name}`);
    }, function() {
      $('#results').text("There was an error processing your request. Please try again.");
    });
  });
});
