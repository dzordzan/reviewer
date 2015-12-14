angular
    .module('appModule')
    .controller('ProductSearchController', ProductSearchController);


function ProductSearchController ($scope, $http, $rootScope) {
    var vm = this;

    vm.selected = undefined;
    $scope.product = {};

    $scope.getLocation = function (val) {
        return $http.get('api/products/' + val)
            .then(function (response) {
                return response.data.filter(function (item) {
                    return item.type === 'product';
                });

            });
    };

    $scope.onSelect = function($item, $model)
    {
        $rootScope.$emit('productSelected', $model);
        $scope.product = $model;
    };
}
