angular
    .module('appModule')
    .controller('ProductController', ProductController);


function ProductController ($scope, $http, $rootScope) {
    var vm = this,
        $productDOM;

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
            $productDOM = $(response.data.replace(/<img[^>]*>/g,""));

            var basicInfoMatches = response.data.match(/ado\.master\((\{[\s\S.]+?\})\)/i);


            if (!angular.isUndefined(basicInfoMatches[1])) {
                $scope.product = eval("data="+ basicInfoMatches[1]);
                $scope.product.id = id.replace('/','');

                $scope.getImages();

            } else {
                //brak produktu
            }
            });
    };

    $scope.getImages = function () {
        $scope.product.images = [];
        $productDOM.find('#product-carousel a.js_gallery-anchor[href^="//"]').each(function(index, element) {
            $scope.product.images.push(element.href);
        });
    };

    $scope.getProductReviews = function () {
        $http
            .get('api/product/review/'+ product.id)
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
