export function getData(search, apiKey, hanky, bob){
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${search}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        hanky(response);
      },
      error: function() {
        bob();
      }
    });
  }
