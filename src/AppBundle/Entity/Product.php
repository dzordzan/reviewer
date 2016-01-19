<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Products
 *
 * @ORM\Table(name="products")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProductsRepository")
 */
class Product
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
     * @ORM\Column(name="name", type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @var float
     *
     * @ORM\Column(name="price", type="float", nullable=true)
     */
    private $price;

    /**
     * @var string
     *
     * @ORM\Column(name="category", type="string", length=120, nullable=true)
     */
    private $category;

    /**
     * @var float
     *
     * @ORM\Column(name="score", type="float", nullable=true)
     */
    private $score;

    /**
     * @var string
     *
     * @ORM\Column(name="shops", type="string", length=255, nullable=true)
     */
    private $shops;

    /**
     * @var string
     *
     * @ORM\Column("votes", type="string", length=255, nullable=true)
     */
    private $votes;

    /**
     * @var string
     *
     * @ORM\Column(name="parameters", type="array", nullable=true)
     */
    private $parameters;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @var string
     *
     * @ORM\Column(name="vars_keys", type="string", length=255, nullable=true)
     */
    private $keys;

    /**
     * @var string
     *
     * @ORM\Column(name="vars", type="string", length=255, nullable=true)
     */
    private $vars;

    /**
     * @var string
     *
     * @ORM\Column(name="reviews", type="array", nullable=true)
     */
    private $reviews;

    /**
     * @var string
     *
     * @ORM\Column(name="images", type="array", nullable=true)
     */
    private $images;


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
     * @param string $name
     *
     * @return Products
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get productName
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set productPrice
     *
     * @param float $price
     *
     * @return Products
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get productPrice
     *
     * @return float
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set productCategory
     *
     * @param string $category
     *
     * @return Products
     */
    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get productCategory
     *
     * @return string
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set productScore
     *
     * @param float $score
     *
     * @return Products
     */
    public function setScore($score)
    {
        $this->score = $score;

        return $this;
    }

    /**
     * Get productScore
     *
     * @return float
     */
    public function getScore()
    {
        return $this->score;
    }

    /**
     * Set productShops
     *
     * @param string $shops
     *
     * @return Products
     */
    public function setShops($shops)
    {
        $this->shops = $shops;

        return $this;
    }

    /**
     * Get productShops
     *
     * @return string
     */
    public function getShops()
    {
        return $this->shops;
    }

    /**
     * Set productVotes
     *
     * @param string $votes
     *
     * @return Products
     */
    public function setVotes($votes)
    {
        $this->votes = $votes;

        return $this;
    }

    /**
     * Get productVotes
     *
     * @return string
     */
    public function getVotes()
    {
        return $this->votes;
    }

    /**
     * Set productParameters
     *
     * @param string $parameters
     *
     * @return Products
     */
    public function setParameters($parameters)
    {
        $this->parameters = $parameters;

        return $this;
    }

    /**
     * Get productParameters
     *
     * @return string
     */
    public function getParameters()
    {
        return $this->parameters;
    }

    /**
     * Set productImage
     *
     * @param string $image
     *
     * @return Products
     */
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get productImage
     *
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set productKeys
     *
     * @param string $keys
     *
     * @return Products
     */
    public function setKeys($keys)
    {
        $this->keys = $keys;

        return $this;
    }

    /**
     * Get productKeys
     *
     * @return string
     */
    public function getKeys()
    {
        return $this->keys;
    }

    /**
     * Set productVars
     *
     * @param string $vars
     *
     * @return Products
     */
    public function setVars($vars)
    {
        $this->vars = $vars;

        return $this;
    }

    /**
     * Get productVars
     *
     * @return string
     */
    public function getVars()
    {
        return $this->vars;
    }

    /**
     * Set productReviews
     *
     * @param string $reviews
     *
     * @return Products
     */
    public function setReviews($reviews)
    {
        $this->reviews = $reviews;

        return $this;
    }

    /**
     * Get productReviews
     *
     * @return string
     */
    public function getReviews()
    {
        return $this->reviews;
    }

    /**
     * Set productOtherImages
     *
     * @param string $images
     *
     * @return Products
     */
    public function setImages($images)
    {
        $this->images = $images;

        return $this;
    }

    /**
     * Get productOtherImages
     *
     * @return string
     */
    public function getImages()
    {
        return $this->images;
    }

}

