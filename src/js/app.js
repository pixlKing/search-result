var app = angular.module("app", []);

app.controller("appController", function ($scope, $http) {

	$http.get('/almundo/api/data.json').success(function (data) {

		$scope.hotels = data.hotels;

		console.log(data.hotels);
		console.log(data.hotels[0].stars);

	});
})



/*

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

function Main($scope){
}
*/
app.filter('range', function() {
  return function() {
    return '5';
  };
});
function Estrellas($scope){
}
