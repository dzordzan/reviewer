<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\Product;
use AppBundle\Form\ProductType;
use Symfony\Component\HttpFoundation\Response;

/**
 * Product controller.
 *
 * @Route("/database")
 */
class ProductController extends Controller
{
    /**
     * Lists all Product entities.
     *
     * @Route("/", name="database_index")
     * @Method("GET")
     * 
     * @return mixed $products / List of products as an array
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $products = $em->getRepository('AppBundle:Product')->findAll();

        return $this->render('product/index.html.twig', array(
            'products' => $products,
        ));
    }

    /**
     * Finds and displays a Product entity.
     *
     * @Route("/{id}", name="database_show")
     * @Method("GET")
     * @param Product $product
     * @return Product $product Product entity
     */
    public function showAction(Product $product)
    {

        return $this->render('product/show.html.twig', array(
            'product' => $product
        ));
    }

    /**
     * Displays a form to edit an existing Product entity.
     *
     * @Route("/{id}/edit", name="database_edit")
     * @Method({"GET", "POST"})
     * @param Request $request
     * @param Product $product
     * @return Edit page
     */
    public function editAction(Request $request, Product $product)
    {
        $deleteForm = $this->createDeleteForm($product);
        $editForm = $this->createForm('AppBundle\Form\ProductType', $product);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($product);
            $em->flush();

            return $this->redirectToRoute('database_edit', array('id' => $product->getId()));
        }

        return $this->render('product/edit.html.twig', array(
            'product' => $product,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a Product entity.
     *
     * @Route("/delete/{id}", name="product_delete")
     * @Method("GET")
     * @param Request $request
     * @param Product $product
     * @return index page
     */
    public function deleteAction(Request $request, Product $product)
    {
        if ($request->get('pass') !== 'angólar') {
            $this->addFlash('danger', 'Nie masz uprawnień do wykonania tej operacji');
        } else {

            $em = $this->getDoctrine()->getManager()->getRepository('AppBundle:Product');

            $em->createQueryBuilder('p')
                ->delete()
                ->where('p.id = :product')
                ->setParameter('product', $product->getId())
                ->getQuery()->execute();

            $this->addFlash('success', 'Pomyslnie usunąłeś produkt');
        }

        return $this->redirectToRoute('database_index');
    }

    /**
     * Deletes a whole database.
     *
     * @Route("/whole/delete", name="database_delete")
     * @Method("GET")
     * @param Request $request
     */
    public function deleteDatabaseAction(Request $request)
    {
        if ($request->get('pass') !== 'angólar') {
            $this->addFlash('danger', 'Nie masz uprawnień do wykonania tej operacji');
        } else {

            $em = $this->getDoctrine()->getManager()->getRepository('AppBundle:Product');

            $em->createQueryBuilder('p')
                ->delete()
                ->getQuery()->execute();

            $this->addFlash('success', 'Pomyslnie usunąłeś wszystkie wpisy');
        }

        return $this->redirectToRoute('database_index');
    }

}
