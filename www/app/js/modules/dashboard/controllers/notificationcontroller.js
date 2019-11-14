angular.module('altairs', []).controller('NotificationController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){
$scope.cookieChecker="checker";
$scope.pagetitle="Notifications";
$scope.counter=1;
$scope.yr=new Date().getFullYear();
$scope.allvendorsale="202K";
$scope.firstname="Juan";
$scope.lastname="Juan";
$scope.avatar="3.jpg";


$scope.all_notifications=[
{counter:1,vendor_id:'Juan',vendor_avatar_id:'4.jpg',message_sender_name: 'John', date_sent:'20 Nov, 2019',notification_type:'Urgent',user_last_seen:'20 minutes ago',message_body:'System downtime, please resolve'}, 
{counter:2,vendor_id:'Lizzy',vendor_avatar_id:'5.jpg',message_sender_name: 'Lizy', notification_type:'Emergency',date_sent:'14 Oct, 2019', user_last_seen:'', message_body:'Affiliates needs portal link'}
];

}]);
