export function getData(search, apiKey, yes, no){
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${search}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      statusCode: {
        200: function(response){
          yes(response);
        },
        404: function(response) {
          alert('404 ERROR');
        }
      }, error: function(){
        no();
      }
    });
  }

export function counter(){
  let i;
  for (i = 0; i < 5; i++) {
    $('#results').append(`
      Your result is ${response.data[i].practices[0].name}<br>
      Phone number: ${response.data[i].practices[0].phones[0].number}<br>
      Accepts new patients? ${response.data[0].practices[0].accepts_new_patients}<br>
      Address:<br> ${response.data[i].practices[0].visit_address.street}, Portland, OR.<br>
      `);
    }
  }
