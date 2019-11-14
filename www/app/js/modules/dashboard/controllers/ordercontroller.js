angular.module('altairs', []).controller('OrderController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.cookieChecker="checker";
$scope.pagetitle="Orders";
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

$scope.order_details=[{order_id:'110220',product_ordered:'TV',dateadded:'14 Jul, 2019',vendor_id:'Juan',vendor_avatar:'5.jpg',
									order_volume: '158',order_amt: '1.45M',order_bookings:'3,000',location:'Abuja'}, {order_id:'201190',product_ordered:'Gas cooker',dateadded:'20 Aug, 2019',
									vendor_id:'Lekan',vendor_avatar:'2.jpg',order_volume:'216',order_bookings:'5420',order_amt: '256k',location:'Lagos'}]
}]);
