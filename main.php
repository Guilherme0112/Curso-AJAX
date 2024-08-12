<?php
    include_once "class/conexao-class.php";
    header('Content-Type: application/json');
    
    $con = DB::connect();

    $query = $con->prepare("SELECT * FROM produtos");
    $query->execute();
    $dados = $query->fetchAll(PDO::FETCH_ASSOC);

    if(count($dados) > 0){
        echo json_encode(["dados" => $dados]);
    } else {
        echo json_encode(["dados" => "Sem dados no banco de dados"]);
    }

    // var_dump($dados);
    
?>