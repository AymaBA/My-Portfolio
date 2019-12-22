<?php

$succes = 0;
$msg = "";




if (!empty($_POST['nom']) AND !empty($_POST['email']) AND !empty($_POST['phone']) AND !empty($_POST['message'])) {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = nl2br(htmlspecialchars($_POST['message']));
    if (filter_var($email,FILTER_VALIDATE_EMAIL) ) {
        
        $to = 'aymaprod12@gmail.com';
        $subject = 'Ayma-dev.tk';
        $message_final = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
            
            </style>
        </head>
        <body>
            <h1>Formulaire de contact Ayma-dev.tk<h1/>

            <h3>`.$nom.`</h3><br/>
            <h2>`.$phone.`</h2><h2>`.$email.`</h2><br/><br/><br/>

            <p>Message :</br>     `.$message.`</p>



        </body>
        </html>`;


        $headers = 'From: '.$email.'' . "\r\n" .
        'Reply-To:'.$email.  "\r\n" .
        'Content-type: text/html; charset=iso-8859-1'."\r\n".
        'X-Mailer: PHP/' . phpversion();

        // mail($to, $subject, $message_final, $headers);

        $succes = 1;
        $msg = "Send!";
       
    }else{
        $msg ="L'email n'est pas au bon format.";
    }

}else{
    $msg = "Vous n'avez pas rempli tous les champs";
}

$res = ["succes"=>$succes,"msg"=>$msg];

echo json_encode($res);


?>