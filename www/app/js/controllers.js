'use strict';

/* Controllers */
angular.module('altairs.controllers', []).controller('ValidateController', [function() {}]).controller('LoginController', [function() {}]).controller('LogoutController',[function(){}]);

angular.module('altairs',[]).controller('LoginController',function($scope){
	
	
	
});


angular.module('altairs',[]).controller('LogoutController',function($scope){
	
	
	
});

angular.module('altairs', []).controller('ValidateController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.altrs_username='usr';
$scope.altrs_password='pass';
$scope.cookieChecker="checker";
$scope.year=new Date().getFullYear();
$scope.error='no errors';
$scope.error_username=null;
$scope.error_password=null;
$scope.submit=function(){
return 'No errors'
};
}]);

angular.module('altairs', []).controller('VendorRegistration',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.altrs_username='usr';
$scope.altrs_password='pass';
$scope.cookieChecker="checker";
$scope.error_username=null;
$scope.error_password=null;
$scope.year=new Date().getFullYear();
$scope.pagename="Altairs Systems";
}]);

angular.module('altairs', []).controller('VendorsController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.altrs_username='usr';
$scope.altrs_password='pass';
$scope.cookieChecker="checker";
$scope.error_username=null;
$scope.error_password=null;
$scope.year=new Date().getFullYear();
$scope.pagetitle="Vendors Portal";
}]);

