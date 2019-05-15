var app = angular.module("learning-ng",[]);

app.controller('MainCtrl',["$scope",function($scope){
    $scope.Name = "Farzam"
}]);

app.directive("userStory",function(){
    function linker(scope,$element,attr){
        debugger;
        $element.on('click',function(){
            $element.css("backgroundColor","#336699");
        })

        $element.on('mouseover',function(){
            $element.css("backgroundColor","#ccc");
        })
    }   

    function controller ($scope){
        debugger;
    }

    return {
        restrict: 'A',
        controller: controller,
        controllerAs: 'userStory',
        link:linker
    }
})


