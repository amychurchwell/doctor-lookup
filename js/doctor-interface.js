import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#dr-form').submit(function(event) {
    event.preventDefault();
    const apiKey = require('./../.env').apiKey;
    const name = $('#name-input').val();
    $('#name-input').val("");
    $('#results').empty();
    getData(name, apiKey, function(response) {
      console.log(`${response.data}`);
      $('#results').append(`
        <img src="${response.data[0].profile.image_url}"><br>
        <h4>${response.data[0].practices[0].name}</h4><br>
        Phone number: ${response.data[0].practices[0].phones[0].number}<br>
        Accepts new patients? ${response.data[0].practices[0].accepts_new_patients}<br>
        Address:<br> ${response.data[0].practices[0].visit_address.street}, Portland, OR.<br>
        `);
    }, function() {
      $('#results').text("There was an error processing your request. Please try again.");
    // }, function() {
    //   $('#results').text("NOTHING AHHHH!");
    });
  });
});

  // for (i = 0; i < ${response.data})

// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)
