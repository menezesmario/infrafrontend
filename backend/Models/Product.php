<?php


require "Connection.php";

class Product
{
    public $id;
    public $name;
    public $description;
    public $region;
    public $price;
    public $image;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM products");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}