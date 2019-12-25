<?php

$msg = "";
$succes = 0;
$data = null;

if (!empty($_POST["id"]) AND !empty($_POST["password"])) {
    

    if ($_POST["id"] == "aymanBenAbdellah" AND $_POST["password"] == "123456789" OR $_POST["id"] == "alex" AND $_POST["password"] == "123456789" ) {
        $succes = 1;
        $msg ="Connecté !";
        $data = file_get_contents("email.json");
    }else{
        $msg = "Mot de passe ou identifiant incorret";
    }
}else{
    $msg ="Veuillez remplire tous les champs.";
}




$res = json_encode(["msg"=>$msg ,"succes"=> $succes ,"data"=>$data]);

echo $res;