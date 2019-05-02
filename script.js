$(document).ready(init);

function getData() {

  $.ajax({
    // url : "fulldb.php",
    url : "fulldb2.php",
    method : "GET",
    success : function(apiData, stato) {
      if (stato == "success") {

        var parse = JSON.parse(apiData);
        // console.log(parse);

        // getGraph(parse);
        getGraph2(parse);
        getGraph3(parse["fatturato_by_agent"]);
      }
    },
    error : function(richiesta, stato, errori) {
      alert("Errore di connessione " + errori);
    }
  });

}

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

function getGraph2(object) {
  // console.log(object);
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: object["fatturato"].type,

      // The data for our dataset
      data: {
          labels: ["GENNAIO", "FEBBRAIO", "MARZO", "APRILE", "MAGGIO", "GIUGNO", "LUGLIO", "AGOSTO", "SETTEMBRE", "OTTOBRE", "NOVEMBRE", "DICEMBRE"],
          datasets: [{
              label: 'VENDITE',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(0, 0, 0)',
              data: object["fatturato"].data,
              lineTension: 0.2
          }]
      },

      // Configuration options go here
      options: {}
  });

}

function getGraph3(object) {

  // console.log(object, object.data);

  var values = [];
  var labels = [];

  for (var property in object.data) {
    labels.push(property);
    values.push(object.data[property])
  }
  // console.log(values, labels);

  var ctx = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: object.type,

      // The data for our dataset
      data: {
          labels: labels,
          datasets: [{
              backgroundColor: ["red", "yellow", "blue", "pink"],
              borderColor: 'rgb(0, 0, 0)',
              data: values
          }]
      },

      // Configuration options go here
      options: {}
  });

}


function init() {
  getData();
}
