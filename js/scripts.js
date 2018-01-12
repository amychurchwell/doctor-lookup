export function getData(search, hanky, bob){
    $.ajax({
      url: `http://pokeapi.co/api/v2/pokemon/${search}/`,
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
