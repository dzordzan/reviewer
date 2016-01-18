<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Products
 *
 * @ORM\Table(name="products")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProductsRepository")
 */
class Products
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="product_name", type="string", length=255)
     */
    private $productName;

    /**
     * @var float
     *
     * @ORM\Column(name="product_price", type="float", nullable=true)
     */
    private $productPrice;

    /**
     * @var string
     *
     * @ORM\Column(name="product_category", type="string", length=120)
     */
    private $productCategory;

    /**
     * @var float
     *
     * @ORM\Column(name="product_score", type="float")
     */
    private $productScore;

    /**
     * @var string
     *
     * @ORM\Column(name="product_shops", type="string", length=255, nullable=true)
     */
    private $productShops;

    /**
     * @var string
     *
     * @ORM\Column(name="product_votes", type="string", length=255, nullable=true)
     */
    private $productVotes;

    /**
     * @var string
     *
     * @ORM\Column(name="product_parameters", type="string", length=255, nullable=true)
     */
    private $productParameters;

    /**
     * @var string
     *
     * @ORM\Column(name="product_image", type="string", length=255, nullable=true)
     */
    private $productImage;

    /**
     * @var string
     *
     * @ORM\Column(name="product_keys", type="string", length=255, nullable=true)
     */
    private $productKeys;

    /**
     * @var string
     *
     * @ORM\Column(name="product_vars", type="string", length=255, nullable=true)
     */
    private $productVars;

    /**
     * @var string
     *
     * @ORM\Column(name="product_reviews", type="string", length=1020, nullable=true)
     */
    private $productReviews;

    /**
     * @var string
     *
     * @ORM\Column(name="product_other_images", type="string", length=1020, nullable=true)
     */
    private $productOtherImages;

    /**
     * @var int
     *
     * @ORM\Column(name="product_ceneo_id", type="integer")
     */
    private $productCeneoId;

    /**
     * @var int
     *
     * @ORM\Column(name="product_similar_id", type="integer", nullable=true)
     */
    private $productSimilarId;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set productName
     *
     * @param string $productName
     *
     * @return Products
     */
    public function setProductName($productName)
    {
        $this->productName = $productName;

        return $this;
    }

    /**
     * Get productName
     *
     * @return string
     */
    public function getProductName()
    {
        return $this->productName;
    }

    /**
     * Set productPrice
     *
     * @param float $productPrice
     *
     * @return Products
     */
    public function setProductPrice($productPrice)
    {
        $this->productPrice = $productPrice;

        return $this;
    }

    /**
     * Get productPrice
     *
     * @return float
     */
    public function getProductPrice()
    {
        return $this->productPrice;
    }

    /**
     * Set productCategory
     *
     * @param string $productCategory
     *
     * @return Products
     */
    public function setProductCategory($productCategory)
    {
        $this->productCategory = $productCategory;

        return $this;
    }

    /**
     * Get productCategory
     *
     * @return string
     */
    public function getProductCategory()
    {
        return $this->productCategory;
    }

    /**
     * Set productScore
     *
     * @param float $productScore
     *
     * @return Products
     */
    public function setProductScore($productScore)
    {
        $this->productScore = $productScore;

        return $this;
    }

    /**
     * Get productScore
     *
     * @return float
     */
    public function getProductScore()
    {
        return $this->productScore;
    }

    /**
     * Set productShops
     *
     * @param string $productShops
     *
     * @return Products
     */
    public function setProductShops($productShops)
    {
        $this->productShops = $productShops;

        return $this;
    }

    /**
     * Get productShops
     *
     * @return string
     */
    public function getProductShops()
    {
        return $this->productShops;
    }

    /**
     * Set productVotes
     *
     * @param string $productVotes
     *
     * @return Products
     */
    public function setProductVotes($productVotes)
    {
        $this->productVotes = $productVotes;

        return $this;
    }

    /**
     * Get productVotes
     *
     * @return string
     */
    public function getProductVotes()
    {
        return $this->productVotes;
    }

    /**
     * Set productParameters
     *
     * @param string $productParameters
     *
     * @return Products
     */
    public function setProductParameters($productParameters)
    {
        $this->productParameters = $productParameters;

        return $this;
    }

    /**
     * Get productParameters
     *
     * @return string
     */
    public function getProductParameters()
    {
        return $this->productParameters;
    }

    /**
     * Set productImage
     *
     * @param string $productImage
     *
     * @return Products
     */
    public function setProductImage($productImage)
    {
        $this->productImage = $productImage;

        return $this;
    }

    /**
     * Get productImage
     *
     * @return string
     */
    public function getProductImage()
    {
        return $this->productImage;
    }

    /**
     * Set productKeys
     *
     * @param string $productKeys
     *
     * @return Products
     */
    public function setProductKeys($productKeys)
    {
        $this->productKeys = $productKeys;

        return $this;
    }

    /**
     * Get productKeys
     *
     * @return string
     */
    public function getProductKeys()
    {
        return $this->productKeys;
    }

    /**
     * Set productVars
     *
     * @param string $productVars
     *
     * @return Products
     */
    public function setProductVars($productVars)
    {
        $this->productVars = $productVars;

        return $this;
    }

    /**
     * Get productVars
     *
     * @return string
     */
    public function getProductVars()
    {
        return $this->productVars;
    }

    /**
     * Set productReviews
     *
     * @param string $productReviews
     *
     * @return Products
     */
    public function setProductReviews($productReviews)
    {
        $this->productReviews = $productReviews;

        return $this;
    }

    /**
     * Get productReviews
     *
     * @return string
     */
    public function getProductReviews()
    {
        return $this->productReviews;
    }

    /**
     * Set productOtherImages
     *
     * @param string $productOtherImages
     *
     * @return Products
     */
    public function setProductOtherImages($productOtherImages)
    {
        $this->productOtherImages = $productOtherImages;

        return $this;
    }

    /**
     * Get productOtherImages
     *
     * @return string
     */
    public function getProductOtherImages()
    {
        return $this->productOtherImages;
    }

    /**
     * Set productCeneoId
     *
     * @param integer $productCeneoId
     *
     * @return Products
     */
    public function setProductCeneoId($productCeneoId)
    {
        $this->productCeneoId = $productCeneoId;

        return $this;
    }

    /**
     * Get productCeneoId
     *
     * @return int
     */
    public function getProductCeneoId()
    {
        return $this->productCeneoId;
    }

    /**
     * Set productSimilarId
     *
     * @param integer $productSimilarId
     *
     * @return Products
     */
    public function setProductSimilarId($productSimilarId)
    {
        $this->productSimilarId = $productSimilarId;

        return $this;
    }

    /**
     * Get productSimilarId
     *
     * @return int
     */
    public function getProductSimilarId()
    {
        return $this->productSimilarId;
    }
}

