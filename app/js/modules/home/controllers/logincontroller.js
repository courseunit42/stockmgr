'use strict';

angular.module('altairs', []).controller('LoginController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.altrs_username='usr';
$scope.altrs_password='pass';
$scope.cookieChecker="checker";
$scope.year=new Date().getFullYear();
$scope.error='no errors';
$scope.error_username=null;
$scope.error_password=null;
$scope.pagebg="body{background-color:#f7f7f7;}";
$scope.submit=function(){
return 'No errors';
};
}]);
