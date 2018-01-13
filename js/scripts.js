export function getDr(search, lookFor, apiKey, yes, no){
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?${lookFor}=${search}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
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

export function counter(response, input){
  let i;
  for (i = 0; i < input; i++) {
    $('#results').append(`
      <div class="col-md-6">
        <div class="card">
          <img class="card-img-top" src="${response.data[i].profile.image_url}" alt="Card image cap">
          <h5 class="card-title">${response.data[i].practices[0].name}</h5>
          Phone number: ${response.data[i].practices[0].phones[0].number}<br>
          Accepts new patients? <b>${response.data[0].practices[0].accepts_new_patients}</b><br>
          Address: ${response.data[i].practices[0].visit_address.street}, <br>
          Portland, OR. ${response.data[i].practices[0].visit_address.zip}<br>
        </div>
      </div>
      `);
    }
  }
