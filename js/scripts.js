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
