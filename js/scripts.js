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

    if (search === undefined){
      alert('THIS THING DOESNT WORK FIX LATER');
    }
  }

export function counter(){
  var cars = ["BMW", "Volvo", "Saab", "Ford"];
  var i = 0;
  var len = cars.length;
  var text = "";

  for (; i < len; ) {
      text += cars[i] + "<br>";
      i++;
    }
    return text;
}
