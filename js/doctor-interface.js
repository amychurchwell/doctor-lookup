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
      let i;
      for (i = 0; i < 5; i++) {
        $('#results').append(`i`);
        $('#results').append(`
          Your result is ${response.data[i].practices[0].name}<br>
          Phone number: ${response.data[i].practices[0].phones[0].number}<br>
          Accepts new patients? ${response.data[0].practices[0].accepts_new_patients}<br>
          Address:<br> ${response.data[i].practices[0].visit_address.street}, Portland, OR.<br>
          `);
      }
      $('#results').append(`You received: ${response.meta.count} results.<br>`);
    }, function() {
      $('#results').text("There was an error processing your request. Please try again.");
    });
  });
});

//query
