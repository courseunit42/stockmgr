
angular.module('altairs', []).controller('DashboardController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.cookieChecker="checker";
$scope.pagetitle="Admin Dashboard";
$scope.counter=1;
$scope.firstname="Juan";
$scope.lastname="Akabueze";
$scope.locationn="Lagos";
$scope.phoneNumber="+234- 8030827979";
$scope.dateadded="15th July, 2018";
$scope.avatar="9.jpg";
$scope.yr=new Date().getFullYear();
$scope.allvendorsale="202K";
$scope.vendorcount="5";
$scope.totalbookings="500K";
$scope.today_sales="2.015M";
$scope.total_stock="213K";
$scope.allvendorsales="145K";
$scope.adminMailCount=19;
}]);


routr=angular.module('altair.js.modules.dashboard.controllers',[]).config(function ($routeProvider){
$routeProvider.when('/',{controller:'DashboardController'})
.when('/account-utility',{controller:'AccountController',templateUrl:'app/views/dashboard/topbar.html'}).
otherwise({redirectTo:'/'});
	
});


