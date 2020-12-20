<?php

class Connection
{
  public static function getDb ()
  {
    $conn = new PDO("mysql:host=mysql-server.c92suwh5watp.sa-east-1.rds.amazonaws.com;
      dbname=coffeeshop;
      charset=utf8",
      "admin",
      "password123"
    );

    if ($conn) {
      return $conn;
    }
    else {
      echo "<h1> Erro ao conectar com Banco de Dados </h1>";
    }

  }
}