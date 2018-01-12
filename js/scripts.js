export function getData(search, success, fail){
    $.ajax({
      url: `http://pokeapi.co/api/v2/pokemon/${search}/`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        success(response);
      },
      error: function() {
        fail();
      }
    });
  }
