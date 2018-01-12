import { getDr } from './../js/scripts.js';
import { counter } from './../js/scripts.js';

$(document).ready(function() {
  $('#dr-form').submit(function(event) {
    event.preventDefault();
    const apiKey = require('./../.env').apiKey;
    const name = $('#name-input').val();
    const symptom = $('#symptom-input').val();
    $('#name-input').val("");
    $('#symptom-input').val("");
    $('#results').empty();

    const symptomInput = document.getElementById('symptom-input');
    const nameInput = document.getElementById('name-input');

    if (symptomInput && symptomInput.value){
      let lookFor = "query";
    }else if (nameInput && nameInput.value){
      let lookFor = "last_name";
    }else{
      return "Please enter a value.";
    }

    getDr(name, lookFor, apiKey, function(response) {
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
