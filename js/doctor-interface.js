import { getData } from './../js/scripts.js';
import { counter } from './../js/scripts.js';

$(document).ready(function() {
  $('#dr-form').submit(function(event) {
    event.preventDefault();
    const apiKey = require('./../.env').apiKey;
    const name = $('#name-input').val();
    $('#name-input').val("");
    $('#results').empty();
    getData(name, apiKey, function(response) {
      let length = `${response.meta.count}`;
      $('#results').append(`You received: ${response.meta.count} results.<br>`);
      counter(response, length);
    }, function() {
      $('#results').text("There was an error processing your request. Please try again.");
    });
  });
});

//query
