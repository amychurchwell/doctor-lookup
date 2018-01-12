import { getData } from './../js/scripts.js';
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#dr-form').submit(function(event) {
    event.preventDefault();
    let name = $('#name-input').val();
    $('#name-input').val("");
    getData(name, apiKey, function(response) {
      $('#results').text(`Your result is ${response.data.profile.last_name}`);
    }, function() {
      $('#results').text("There was an error processing your request. Please try again.");
    });
  });
});
