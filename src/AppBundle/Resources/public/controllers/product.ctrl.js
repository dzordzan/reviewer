angular
    .module('appModule')
    .controller('ProductController', ProductController);


function ProductController ($scope, $http, $rootScope) {
    var vm = this;

    $rootScope.$on('productSelected', function(event, model) {
        $scope.setProductModel(model.url);
    });

    $scope.setProductModel = function (id) {
        $scope.product = {};

        $http({
            url: 'api/product' + id,
            method: 'GET',
            transformResponse: undefined
        })
            .then(function (response) {

              $scope.product = eval("data="+response.data);

            });
    }
}
