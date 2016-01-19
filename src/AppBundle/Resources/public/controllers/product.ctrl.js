angular
    .module('appModule')
    .controller('ProductController', ProductController);

/**
 * @Class ProductController
 * @constructor
 */
function ProductController ($scope, $http, $rootScope, Console) {
    var vm = this,
        $productDOM,
        $similarDOM,
        product,
        similars;

    $scope.product = {};
    $scope.saveFormat = 'JSON';

    $rootScope.$on('productSelected', function(event, model) {
        //$scope.setProductModel(model.id);
        $scope.product = model;
        $scope.product.reviews = [];

        $scope.similars = [];

    });

    $rootScope.$on('product', function(event, command) {
        //$scope.setProductModel(model.id);
        var index = command.split('.')[1].split('=')[0];
        var value = command.split('=')[1];

        if (!angular.isDefined($scope.product)){
            $scope.product = {};
        }
        $scope.$apply(function(){$scope.product[index.trim()] = value.trim();});

    });
	
	/** 
	 * This function shows or  hides data block.
	 * @method slideToggle
	 */
    $scope.slideToggle = function() {
        $('#json-data').slideToggle();
    };
    
	/** 
	 * This function fetch and transformation product data from Ceneo.
	 * @method getProductInfo
	 */
    $scope.getProductInfo = function () {
        if (!angular.isDefined($scope.product)){
            Console.error('Wyszukaj i wybierz produkt wcześniej');
            return;
        }
        $http({
            url: 'api/product/' + $scope.product.id,
            method: 'GET',
            transformResponse: undefined
        }).then(function (response) {
            Console.echo("Przetwarzanie informacji o produkcie");
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
    
	/** 
	 * This function fetch product image from Ceneo.
	 * @method getImages
	 */	
    $scope.getImages = function () {
        $scope.product.images = [];
        $productDOM.find('#product-carousel a.js_gallery-anchor[href^="//"]').each(function(index, element) {
            $scope.product.images.push(element.href);
        });
    };
	
	/** 
	 * This function fetch product reviews from Ceneo.
	 * @method getProductReviews
	 */		
    $scope.getProductReviews = function () {
        $scope.product.reviews = [];
        Console.echo("Pobieranie recenzji produktu");

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
    
	/** 
	 * This function searches and displays related products from the site skapiec.pl
	 * @method getSimilar
	 */	
    $scope.getSimilar = function () {
        if (!angular.isDefined($scope.product)){
            Console.error('Wybierz produkt!');
            return;
        }

        $scope.similars = [];
        $http({
            url: 'api/similar/' + $scope.product.name.toLowerCase(),
            method: 'GET',
            transformResponse: undefined
        }).then(function (response) {

            $similarDOM = $(response.data.replace(/<img([^>]*)>/g,"<lazyimg $1>"));
            var $products = $similarDOM.find('div.partial.products.js.results div.partial');
            Console.echo("Znaleziono "+$products.length+" produkt(ów) podobnych ");
            if ($products.length == 0) {
                Console.error("Dostosuj ręcznie nazwę produktu i spróbuj ponownie");
            } else {
                if (!$scope.isCollapsed) {
                    $scope.isCollapsed = true;
                    $scope.slideToggle();
                }
            }
            angular.forEach($products, function (product) {
                var $similar = $(product);
                var url = $similar.find('a.wrap').attr('href');
                var img = $similar.find('lazyimg').attr('src');
                var name = $similar.find('span.title, a.title').text().trim();
                if (!angular.isDefined(url))
                {
                    Console.echo('Produkt o nazwie: "' + name + '" jest odnośnikiem do zewnętrznego sklepu. Pomijam');
                    return;
                }

                var similar = {};
                similar.url = url;
                similar.img = img;
                similar.name = name;
                $scope.similars.push(similar);

            });

        });
    };

	/** 
	 * This function searches and displays related products from the site skapiec.pl
	 * @method getSimilarReviews
	 * @param {Object}similar
	 */	
	  $scope.getSimilarReviews = function (similar) {
        similar.category = similar.url.match(/cat\/(\d+)\//)[1];
        similar.id = similar.url.match(/\/(\d+)$/)[1];

        $scope.similars.reviews = [];


         $http
             .get('api/review/similar/'+ similar.category  + "/" + similar.id )
             .then(function (response) {
                 Console.echo("Pobieranie recenzji produktów podobnych z produktu: " + similar.id);
                 parseSimilarComment($(response.data.replace(/<img[^>]*>/g,"")).find("div.opinion-wrapper"));
            });
    };

	/** 
	 * This function parse reviews from Ceneo.pl
	 * @method parseComment
	 * @param {String}comments
	 */	
    var parseComment = function (comments) {
        angular.forEach(comments, function (value) {
            $scope.loaderValue += 1;
            var comment = {};
            comment.body = $(value).find('p.product-review-body').text().trim();
            comment.source = 'ceneo.pl';
            $scope.product.reviews.push(comment);
        });
    };

	/** 
	 * This function parse reviews from Skapiec.pl
	 * @method parseSimilarComment
	 * @param {String}comments
	 */	
	var parseSimilarComment = function (comments) {
	  angular.forEach(comments, function (value) {
            $scope.loaderValue += 1;
            var comment = {};
            comment.body = $(value).find('p').text().trim();
            comment.source = 'skapiec.pl';
            $scope.product.reviews.push(comment);
        });
	};

	/** 
	 * This function parses json to xml
	 * @method json2xml
	 * @param o
	 * @param tab
	 * @return {String}xml
	 */	
    function json2xml(o, tab) {
        var toXml = function(v, name, ind) {
            var xml = "";
            if (v instanceof Array) {
                for (var i=0, n=v.length; i<n; i++)
                    xml += ind + toXml(v[i], name, ind+"\t") + "\n";
            }
            else if (typeof(v) == "object") {
                var hasChild = false;
                xml += ind + "<" + name;
                for (var m in v) {
                    if (m.charAt(0) == "@")
                        xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
                    else
                        hasChild = true;
                }
                xml += hasChild ? ">" : "/>";
                if (hasChild) {
                    for (var m in v) {
                        if (m == "#text")
                            xml += v[m];
                        else if (m == "#cdata")
                            xml += "<![CDATA[" + v[m] + "]]>";
                        else if (m.charAt(0) != "@")
                            xml += toXml(v[m], m, ind+"\t");
                    }
                    xml += (xml.charAt(xml.length-1)=="\n"?ind:"") + "</" + name + ">";
                }
            }
            else {
                xml += ind + "<" + name + ">" + v.toString() +  "</" + name + ">";
            }
            return xml;
        }, xml="";
        for (var m in o)
            xml += toXml(o[m], m, "");
        return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
    }
	
	/** 
	 * This function handles downloads
	 * @method saveToPc
	 * @param {Object}data
	 * @param {String}filename
	 */	
    $scope.saveToPc = function (data, filename) {

        $http({
            method: 'POST',
            url: 'api/product/save',
            data: $scope.product,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });

        if (!data) {
            Console.error('Brak danych do zapisania');
            return;
        }

        if (!filename) {
            filename = 'download.json';
        }

        if (typeof data === 'object') {
            data = JSON.stringify(data, undefined, 2);
        }
        var displayData = ($scope.saveFormat=='JSON')?data:json2xml($scope.product);
        var blob = new Blob([displayData], {type: 'text/'+$scope.saveFormat.toLowerCase()}),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window,
            0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    };

}
