<?php
    class DB{
        public static function connect() 
        {
            try{
                $dbhost = 'localhost';
                $dbname = 'curso-ajax';
                $dbuser = 'root';
                $dbpass = '';
                return new PDO("mysql: host=$dbhost;
                                    dbname=$dbname;",
                                    $dbuser,
                                    $dbpass);

            
            } catch(PDOException $e){
                echo json_encode(["Erro" => $e->getMessage()]);
            }
        }
    }

    // DB::connect();

?>