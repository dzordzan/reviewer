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
        }).then(function (response) {

            $scope.product = eval("data="+response.data);
            $scope.product.id = id.replace('/','');
            });
    };

    $scope.getProductReviews = function (id) {

        $http
            .get('api/product/review/'+id)
            .then(function (response) {
                var rawComments = response.data.match(/<li class="product-review js_product-review">[\s\S.]+?<\/li>/ig);

                $scope.product.reviews = [];

                angular.forEach(rawComments, function (value) {

                    var comment = value.match(/<p class="product-review-body">([\s\S.]+?)<\/p>/i)[1];

                    $scope.product.reviews.push(comment);
                });

            });
    }
}
