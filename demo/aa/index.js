var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope", "WebIMWidget","$http", function($scope,
  WebIMWidget,$http) {

  $scope.show = function() {
    WebIMWidget.show();
  }

  $scope.hidden = function() {
    WebIMWidget.hidden();
  }

  $scope.server = WebIMWidget;
  $scope.targetType=1;

  $scope.setconversation=function(){
    WebIMWidget.setConversation(Number($scope.targetType), $scope.targetId, "自定义:"+$scope.targetId);
  }

  angular.element(document).ready(function() {

    WebIMWidget.init({
      appkey: "3argexb6r934e",
      token: "CIbKk/z1AOjB/ForzWFDWpUnU/cREmEFuMhOJuGv5bPlXUSQuAsZcSIX81T5zgZyU5xfoVDjRmdg2Mh5WIasRw==",
      style:{
        width:600,
        positionFixed:true,
        bottom:20,
      },
      displayConversationList:true,
      conversationListPosition:WebIMWidget.EnumConversationListPosition.right,
      onError:function(error){
        console.log("error:"+error);
      }
    });

    WebIMWidget.show();

    WebIMWidget.setUserInfoProvider(function(targetId,obj){
        obj.onSuccess({name:"陌："+targetId});
    });

    // WebIMWidget.onCloseBefore=function(obj){
    //   console.log("关闭前");
    //   setTimeout(function(){
    //     obj.close();
    //   },1000)
    // }

    WebIMWidget.onClose=function(){
      console.log("已关闭");
    }

    WebIMWidget.show();


    //设置会话
    //WebimWidget.setConversation("4", "cc", "呵呵");


  });

}]);
