<?php 

    function query($sql) {
        $servidor = "localhost";
        $usuario = "root";
        $senha = "password";
        $banco = "coffeeshop";

        $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
        $resultado = mysqli_query($connect,$sql);
        mysqli_close($connect);
        return $resultado;
    }

    function nonquery($sql) {
        $servidor = "localhost";
        $usuario = "root";
        $senha = "password";
        $banco = "coffeeshop";

        $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
        $resultado = mysqli_query($connect,$sql);
        mysqli_close($connect);
        
    }





//<?php
//$servername = "localhost";
//    $username = "root";
//    $password = "password";
//    $database = "coffeeshop";
//criando a conexão
//    $conn = mysqli_connect($servername, $username, $password, $database);
//verificando a conexão    
//    if(!$conn){
//      die("A conexão falhou". mysqli_connect_error());
//    }
// 

?>