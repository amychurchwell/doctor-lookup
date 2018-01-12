import { getDr } from './../js/scripts.js';
import { counter } from './../js/scripts.js';

$(document).ready(function() {
  $('#dr-form').submit(function(event) {
    event.preventDefault();
    const apiKey = require('./../.env').apiKey;
    const name = $('#name-input').val();
    const symptom = $('#symptom-input').val();
    $('#name-input').val("");
    $('#results').empty();
    getDr(name, apiKey, function(response) {
      let length = `${response.meta.count}`;
      $('#results').append(`<h3><small class="text-muted">You received: ${response.meta.count} results.</small></h3><br>`);
      counter(response, length);
    }, function() {
      $('#results').text("There was an error processing your request. Please try again.");
    });
  });
});

//query
