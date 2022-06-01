const URL_API = "https://api.ipify.org/?format=json";
fetch(URL_API)
.then(respuestaRaw => respuestaRaw.json())
.then(respuesta => {
  const ip = respuesta.ip;
});
$.ajax({
    url3: 'https://api.positionstack.com/v1/reverse',
    data: {
      access_key: '0097ffe14a54ca75a3ae568fa0a5a9b1',
      query: ip,
      output: 'json',
      limit: 1
    }
  }).done(function(data) {
  });

$('#clock-weather').on('mouseover', function() {
    $.getJSON(url3,function(data3){
    var ciudad = $(data3.city).val();
    if(ciudad.trim().length > 0){
        var units = 'metric';
        var lang = 'es';
        var apiid = 'ed6c9b1200967a8d3cc749ba3f8c2237';
        var url1 = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=${units}&lang=${lang}&appid=${apiid}`;
    
        $.getJSON(url1, function(data1) {
            var url2 = `https://restcountries.com/v3.1/alpha/${data1.sys.country}`;
            $.getJSON(url2, function(data2) {
                var html = `<h4 id="ciudad" class="text-capitalize">${data1.name} (${data2[0].translations.spa.common}): ${data1.weather[0].description}</h4>
                <h4 id="temperatura">Temperatura: ${data1.main.temp}°C</h4>
                <h4 id="coordenadas">Coordenadas: ${data33.coord.lat},${data3.coord.lon}</h4>`;
                var icon_url = `http://openweathermap.org/img/w/${data1.weather[0].icon}.png`;
                var html_img = `<img class="img-clima" src="${icon_url}" alt="">`;            
                $('#info-clima').html(html);
                $('#icon-clima').html(html_img);
            });            
        }).fail(function() {
            Swal.fire({
                title: 'Error!',
                text: 'No se encuentra la ciudad buscada!!!',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        });

    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'Debes ingresar el nombre de una ciudad para su búsqueda!!!',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
    }
    })
});

function buscarPais(code) {
    var url = `https://restcountries.com/v3.1/alpha/${code}`;
    $.get(url, function(data) {
        return 'Chile';
    });
}
