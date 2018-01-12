import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#dr-form').submit(function(event) {
    event.preventDefault();
    const apiKey = require('./../.env').apiKey;
    const name = $('#name-input').val();
    $('#name-input').val("");
    $('#results').empty();
    getData(name, apiKey, function(response) {
      $('#results').append(`
        <img src="${response.data[0].profile[0].image_url}>"
        Your result is ${response.data[0].practices[0].name}<br>
        Phone number: ${response.data[0].practices[0].phones[0].number}<br>
        Accepts new patients? ${response.data[0].practices[0].accepts_new_patients}<br>
        Address:<br> ${response.data[0].practices[0].visit_address.street}, Portland, OR.<br>
        `);
    }, function() {
      $('#results').text("There was an error processing your request. Please try again.");
    });
  });
});

// first name,
// last name,
// address,
// phone number,
//  website and
//  whether or not the doctor is accepting new patients
  for (i = 0; i < ${response.data})
