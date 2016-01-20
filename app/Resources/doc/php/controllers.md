## Table of contents

- [\AppBundle\Controller\DefaultController](#class-appbundlecontrollerdefaultcontroller)
- [\AppBundle\Controller\ProductController](#class-appbundlecontrollerproductcontroller)
- [\AppBundle\Controller\Api\ProductController](#class-appbundlecontrollerapiproductcontroller)

<hr /> 
### Class: \AppBundle\Controller\DefaultController

| Visibility | Function |
|:-----------|:---------|
| public | <strong>indexAction()</strong> : <em>void</em> |

*This class extends \Symfony\Bundle\FrameworkBundle\Controller\Controller*

*This class implements \Symfony\Component\DependencyInjection\ContainerAwareInterface*

<hr /> 
### Class: \AppBundle\Controller\ProductController

> Product controller.

| Visibility | Function |
|:-----------|:---------|
| public | <strong>deleteAction(</strong><em>\Symfony\Component\HttpFoundation\Request</em> <strong>$request</strong>, <em>\AppBundle\Entity\Product</em> <strong>$product</strong>)</strong> : <em>index page</em><br /><em>Deletes a Product entity.</em> |
| public | <strong>deleteDatabaseAction(</strong><em>\Symfony\Component\HttpFoundation\Request</em> <strong>$request</strong>)</strong> : <em>void</em><br /><em>Deletes a whole database.</em> |
| public | <strong>editAction(</strong><em>\Symfony\Component\HttpFoundation\Request</em> <strong>$request</strong>, <em>\AppBundle\Entity\Product</em> <strong>$product</strong>)</strong> : <em>Edit page</em><br /><em>Displays a form to edit an existing Product entity.</em> |
| public | <strong>indexAction()</strong> : <em>mixed $products / List of products as an array</em><br /><em>Lists all Product entities.</em> |
| public | <strong>showAction(</strong><em>\AppBundle\Entity\Product</em> <strong>$product</strong>)</strong> : <em>Product $product Product entity</em><br /><em>Finds and displays a Product entity.</em> |

*This class extends \Symfony\Bundle\FrameworkBundle\Controller\Controller*

*This class implements \Symfony\Component\DependencyInjection\ContainerAwareInterface*

<hr /> 
### Class: \AppBundle\Controller\Api\ProductController

> Class resposible for processing queries

| Visibility | Function |
|:-----------|:---------|
| public | <strong>getProductAction(</strong><em>int</em> <strong>$id</strong>)</strong> : <em>mixed Response / Product detail as JSON records</em><br /><em>This function get product detail from Ceneo and return it as JSON record</em> |
| public | <strong>getProductReviewAction(</strong><em>int</em> <strong>$id</strong>, <em>int</em> <strong>$page</strong>)</strong> : <em>mixed Response / Returns product review as JSON records</em><br /><em>This function get product reviews from Ceneo and return it as JSON record</em> |
| public | <strong>getProductsAction(</strong><em>String</em> <strong>$name</strong>)</strong> : <em>mixed Response / Products list as JSON records</em><br /><em>This function get products list from Ceneo and return it as JSON records</em> |
| public | <strong>getSimilarAction(</strong><em>String</em> <strong>$name</strong>)</strong> : <em>mixed Response / Products list as JSON records</em><br /><em>This function get products list from Skapiec and return it as JSON records</em> |
| public | <strong>getSimilarReviewAction(</strong><em>int</em> <strong>$id</strong>, <em>mixed</em> <strong>$catId</strong>)</strong> : <em>mixed Response / Returns product review as JSON records</em><br /><em>This function get product reviews from Skapiec and return it as JSON record</em> |
| public | <strong>saveProduct(</strong><em>\Symfony\Component\HttpFoundation\Request</em> <strong>$request</strong>)</strong> : <em>mixed Response web page response</em><br /><em>This function save product data into database</em> |

*This class extends \FOS\RestBundle\Controller\FOSRestController*

*This class implements \Symfony\Component\DependencyInjection\ContainerAwareInterface*

