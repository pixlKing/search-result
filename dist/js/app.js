var app = angular.module("app", []);

app.controller("appController", function ($scope, $http) {

	$http.get('/almundo/api/data.json').success(function (data) {

		$scope.hotels = data.hotels;

	});
});

app.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(data){
            if(data.name.toLowerCase().indexOf(searchString) !== -1){
            result.push(data);
        }
        });
        return result;
    };
});
