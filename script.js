$(document).ready(init);

function getGraph(array) {

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ["GENNAIO", "FEBBRAIO", "MARZO", "APRILE", "MAGGIO", "GIUGNO", "LUGLIO", "AGOSTO", "SETTEMBRE", "OTTOBRE", "NOVEMBRE", "DICEMBRE"],
          datasets: [{
              label: 'VENDITE',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(0, 0, 0)',
              data: array,
              lineTension: 0.2
          }]
      },

      // Configuration options go here
      options: {}
  });
}

function getData() {

  $.ajax({
    url : "fulldb.php",
    method : "GET",
    success : function(apiData, stato) {
      if (stato == "success") {

        var parse = JSON.parse(apiData);
        console.log(parse);
        getGraph(parse);
      }
    },
    error : function(richiesta, stato, errori) {
      alert("Errore di connessione " + errori);
    }
  });

}

function init() {
  getData();
}
