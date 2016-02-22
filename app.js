  var myApp = angular.module('myApp', [])

  myApp.controller('mainController', function($scope){
    $scope.name = "Lindsay";
    $scope.occupation = "coder";

    $scope.getname = function(){
      return 'Some Name';
    }
    console.log($scope);

  });

var searchPeople = function(firstname, $scope, lastname, height, age, weight){
  return 'Jane Doe';
}
var searchPeopleString = searchPeople.toString(); //converts the function to a string
console.log(searchPeopleString);

console.log(angular.injector().annotate(searchPeople)); // angular is an object created pass it the function searchPeople => it parses the string and created an array one for each parameter that is expected ["firstname", "lastname", "height", "age", "weight"]
