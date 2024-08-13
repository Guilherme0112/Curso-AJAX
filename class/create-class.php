<?php
    include_once "conexao-class.php";
    header('Content-Type: application/json');
    
    $con = DB::connect();
    if(isset($_POST['nome'], $_POST['preco'],  $_POST['categoria'])){
        $nome = $_POST['nome'];
        $preco = $_POST['preco'];
        $categoria = $_POST['categoria'];

        echo json_encode(["Nome" => $nome, "Preço" => $preco, "Categoria" => $categoria]);
    } else{
        echo json_encode(["Erro" => "Os dados não foram recebidos"]);
    }
    // var_dump($dados);
    
?>