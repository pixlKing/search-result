var app = angular.module("app", []);

app.controller("appController", function ($scope, $http) {

	$http.get('/almundo/api/data.json').success(function (data) {

		$scope.hotels = data.hotels;

	});
});
