angular.module('umbraco').controller("HelloWorldController", ["$scope", "$http", function($scope, $http) {

    $scope.AjaxData = '';

    // backoffice/{PluginController Area}/{Controller}/{Action}
    $http.get('backoffice/helloWorldApi/HelloWorld/GetContent').then(
        function(response) {
            console.log(response);

            $scope.AjaxData = response.data.Data;
        }, 
        function() { console.log('Error'); });
}]);

//angular.module('umbraco').controller("HelloWorldController", HelloWorldModule.HelloWorldController);
