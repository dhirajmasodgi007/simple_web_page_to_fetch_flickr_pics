var app = angular.module('mySearchApp', []);

app.controller('flickrCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.name = name;
  $scope.loading = false;
  $scope.pics = {};


  $scope.searchchange = function() {

    $scope.loading = true;
    $http.jsonp(
      "http://www.flickr.com/services/feeds/photos_public.gne?tags=" + name + "&format=json&jsoncallback=JSON_CALLBACK"
    ).success(function(data) {
      //   alert("inside success");
      $scope.pics = data.items;
      $scope.loading = false;
    }).error(function(data) {
      alert($scope.data.error);
      $scope.loading = false;
      // $scope.data.error = { message: error, status: status};
      // alert($scope.data.error.status);

    });
  }


}]);