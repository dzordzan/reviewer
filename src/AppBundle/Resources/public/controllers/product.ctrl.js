angular
    .module('appModule')
    .controller('ProductController', ProductController);


function ProductController ($scope, $http, $rootScope, Console) {
    var vm = this,
        $productDOM,
        product;


    $rootScope.$on('productSelected', function(event, model) {
        //$scope.setProductModel(model.id);
        $scope.product = model;
    });

    $scope.slideToggle = function() {
        $('#json-data').slideToggle();
    };

    $scope.getProductInfo = function () {
        $http({
            url: 'api/product/' + $scope.product.id,
            method: 'GET',
            transformResponse: undefined
        }).then(function (response) {
            $productDOM = $(response.data.replace(/<img[^>]*>/g,""));

            var basicInfoMatches = response.data.match(/ado\.master\((\{[\s\S.]+?\})\)/i);


            if (!angular.isUndefined(basicInfoMatches[1])) {
                $scope.product.more = eval("data="+ basicInfoMatches[1]);
                //$scope.product.id = id.replace('/','');

                $scope.getProductReviews();
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
        $scope.product.reviews = [];

        var reviewCount = $scope.product.more.vars.ReviewCount;
        var currentPage = 2;
        $scope.loaderMax = reviewCount;
        $scope.loaderValue = 0;

        //pierwsze komentarze

        parseComment($productDOM.find('li.product-review.js_product-review'));
        $scope.loaderValue = 10;

        for (var i = 2; (i-1)*10 < reviewCount; i++) {
            $http
                .get('api/product/review/'+ $scope.product.id + '/' + i)
                .then(function (response) {
                    parseComment($(response.data.replace(/<img[^>]*>/g,"")).find('li.product-review.js_product-review'));

                    var loaderVal = 10*currentPage++;
                    $scope.loaderValue = (loaderVal<$scope.loaderMax)?loaderVal:$scope.loaderMax;
                });

        }
    };

    var parseComment = function (comments) {
        angular.forEach(comments, function (value) {
            $scope.loaderValue += 1;
            var comment = $(value).find('p.product-review-body').text().trim();

            $scope.product.reviews.push(comment);
        });
    }
}
