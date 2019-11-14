angular.module('altairs', []).controller('StockController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.cookieChecker="checker";
$scope.pagetitle="Sales Record & Management";
$scope.counter=1;
$scope.yr=new Date().getFullYear();
$scope.firstname="John Ruth";
$scope.lastname="";
$scope.avatar="4.jpg";
$scope.allvendorsale="202K";
$scope.vendorcount="5";
$scope.totalbookings="500K";
$scope.today_sales="2.015";
$scope.total_stock="213K";
$scope.allvendorsales="145K";
$scope.total_stock_valuation=10.4;
$scope.total_booking_value=20.4;
$scope.cash_deposit='2.44';
$scope.down_by=14.6;
$scope.yoy_comparsn=12.1;
$scope.sales=[{countr:'1',dateadded:'14 Jul, 2019',vendor_id:'Juan',location:'Abuja',total_deliveries:9440,total_sales:2044,sales_bookings:6082}, 
{countr:'2',dateadded:'20 Aug, 2019',vendor_id:'Lekan',location:'Lagos',total_deliveries:12440,total_sales:2544,sales_bookings:9082}]

}]);
