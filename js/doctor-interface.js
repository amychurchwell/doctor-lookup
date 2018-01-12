import { getDr } from './../js/scripts.js';
import { counter } from './../js/scripts.js';

$(document).ready(function() {
  $('#dr-form').submit(function(event) {
    event.preventDefault();
    const apiKey = require('./../.env').apiKey;
    const search = $('#input').val();
    $('#results').empty();

    if (document.getElementById('symptom-check').checked){
      var lookFor = "query";
    }else if (document.getElementById('name-check').checked){
      var lookFor = "last_name";
    }

    getDr(search, lookFor, apiKey, function(response) {
      let length = `${response.meta.count}`;
      $('#results').append(`<h3><small class="text-muted">You received: ${response.meta.count} results.</small></h3><br>`);
      counter(response, length);
    }, function() {
      $('#results').text("There was an error processing your request. Please try again.");
    });
  });
});

//last_name
//query
