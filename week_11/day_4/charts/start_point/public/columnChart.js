// var ColumnChart = function() {
//   var container = document.getElementById('column-chart');
//   var chart = new Highcharts.Chart({
//       chart:{
//         type: 'column',
//         renderTo: container
//       },
//       title:{
//         text: "Our favourite programming languages"
//       },
//       series: [{
//         name: "Cohort 7",
//         data: [{y:8, color: "#f7df1E"}, 12, 3, 1]
//       }],
//       xAxis: {
//         categories: ['Javascript', 'Java', 'Ruby', 'C++']
//       }



//   });
// }

var ColumnChart = function(chartType, text, name, data, categories) {
  var container = document.getElementById('column-chart');
  var chart = new Highcharts.Chart({
  chart: {
      type: chartType, 
      renderTo: container
      },
  title: {
      text: text
      },
  series: [{
    name: name, 
    data: data
  }],
  xAxis: {
    categories: categories
  }

});
}