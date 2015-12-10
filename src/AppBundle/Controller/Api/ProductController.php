<?php

namespace AppBundle\Controller\Api;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\NamePrefix;
use Symfony\Component\HttpFoundation\Response;


/**
 * @NamePrefix("api_")
 */
class ProductController extends FOSRestController
{
    /**
     * This function get products list from Ceneo and return it as JSON records
     * @Get("/api/products/{name}", name="api_get_products", requirements={"name"=".+"})
     * @param $name
     * @return Response
     */
    public function getAction($name)
    {
        $test[] =
            [   'name' => 'Alabama',
                'flag' => '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
            ];

        $data = http_build_query($_POST);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,"http://www.ceneo.pl/OpenSearch/SuggestHtmlJqueryJson?&q=". $name ."&limit=12");
        //curl_setopt($ch, CURLOPT_POST, 1);
        //curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($_POST));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/x-www-form-urlencoded; charset=UTF-8',
            'Content-Length: ' . strlen($data)));

        // receive server response ...
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $server_output = curl_exec ($ch);

        curl_close ($ch);



        //$result = ['updated' => $name];
        return new Response($server_output, Response::HTTP_OK);
    }

}