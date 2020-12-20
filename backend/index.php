<?php

require "./Models/Product.php";

// header("Access-Control-Allow-Origin:*"); // permite o consumo da api por outras aplicações
// header("Content-type: application/json"); // indicação de arquivo json

$products = Product::getAll();

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");
echo json_encode($products);
