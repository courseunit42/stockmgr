angular.module('altairs', []).controller('StockController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.cookieChecker="checker";
$scope.pagetitle="Stock Management";
$scope.counter=1;
$scope.yr=new Date().getFullYear();
$scope.firstname="John Ruth";
$scope.lastname="";
$scope.avatar="4.jpg";
$scope.allvendorsale="202K";
$scope.vendorcount="5";
$scope.totalbookings="500K";
$scope.today_sales="2.015M";
$scope.total_stock="213K";
$scope.allvendorsales="145K";
$scope.phoneNumber="+234- 8030127979";
$scope.dateadded="15th Aug, 2019";

$scope.order_details=[{countr:1,dateadded:'14 Jul, 2019',vendor_id:'Juan',vendor_avatar:'5.jpg',stock_balance:1443,new_stock:1488,existing_stock:'1200',stock_delivered:1560,order_volume:2000,location:'Abuja'},
{countr:2,dateadded:'20 Aug, 2019',vendor_id:'Lekan',vendor_avatar:'2.jpg',stock_balance:4356,new_stock:1220,existing_stock:'2500',stock_delivered:1450,order_volume:21600,location:'Lagos'}]

$scope.total_stocks=function(){
	
return $scope.order_details.existing_stock+$scope.order_details.new_stock+$scope.order_details.stock_balance;
}
}]);


