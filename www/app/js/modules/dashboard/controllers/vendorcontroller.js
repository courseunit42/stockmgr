angular.module('altairs', []).controller('VendorController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.cookieChecker="checker";
$scope.pagetitle="Vendors Portal";
$scope.counter=1;
$scope.fname="Juan";
$scope.firstname="Juan";
$scope.lastname="Akabueze";
$scope.lname="Akabueze";
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
$scope.allvendors=[{recordid:1,vendorasset_id:1011,dateadded:'14 Jul, 2019',firstname:'Juan',lastname:'Chigozie',avatar:'5.jpg',locationn:'Abuja',phoneNumber:'+234-909076886'},
{recordid:2,vendorasset_id:2976,dateadded:'20 Aug, 2019',firstname:'Lekan',lastname:'Shina',avatar:'2.jpg',locationn:'Lagos',phoneNumber:'+234-9076191416'}];

$scope.sales=[{countr:'1',dateadded:'14 Jul, 2019',vendor_id:'Juan',location:'Abuja',total_deliveries:9440,total_sales:2044,sales_bookings:6082}, 
{countr:'2',dateadded:'20 Aug, 2019',vendor_id:'Lekan',location:'Lagos',total_deliveries:12440,total_sales:2544,sales_bookings:9082}]

}]);
