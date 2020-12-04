<?php
    require_once "./db_connect.php";

    $result = query("select Produtos.nome, Produtos.imagem, Produtos.regiao, Pacote.peso, Pacote.preco from Produtos join Pacote on Pacote.id_pacote = Produtos.pacote;");
    /*$result = query("SELECT * FROM Produtos");*/
    $produtos = [];

    while ($row = mysqli_fetch_assoc($result)) {
      $produtos[] = $row;
    }
    


  header("Access-Control-Allow-Origin:*");
  echo json_encode($produtos);

  ?>