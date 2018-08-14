var app = angular.module("app", []);

app.controller("appController", function ($scope, $http) {

	$http.get('/search-result/api/data.json').success(function (data) {

		$scope.hotels = data.hotels;

	});
});

// Search by Name
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

// Filter by stars
function StarsCtrl($scope) {
    $scope.starsIncludes = [];

    $scope.includeStars = function(stars) {
        var i = $.inArray(stars, $scope.starsIncludes);
        if (i > -1) {// Si SI está
            $scope.starsIncludes.splice(i, 1);
        } else {
            $scope.starsIncludes.push(stars);//lo mete en el array
        }
    }
    $scope.starsFilter = function(app) {
        if ($scope.starsIncludes.length > 0) {
            if ($.inArray(app.stars, $scope.starsIncludes) < 0){

                return;
            }
        }
        return app;
    }
}
