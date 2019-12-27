<?php

$succes = 0;
$msg = "";
$msgCode = "";




if (!empty($_POST['nom']) and !empty($_POST['email']) and !empty($_POST['phone']) and !empty($_POST['message'])) {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = nl2br(htmlspecialchars($_POST['message']));
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

        require 'PHPMailerAutoload.php';
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp-ayma-dev.alwaysdata.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'no-reply@ayma-dev.tk';
        $mail->Password = 'wef573efw4s8';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 25;

        $mail->setFrom($email, $nom);
        $mail->addAddress('no-reply@ayma-dev.tk');
        $mail->addReplyTo($email, $nom);


        $mail->isHTML(true);
        $mail->CharSet = "UTF-8";
        $mail->Subject = 'Contact Ayma-Dev.tk';
        $mail->Body    = '<h4>Message de : ' . $nom . '</h4><br><p>Email : ' . $email . '</p><p>Numéro de téléphone : ' . $phone . '</p><br><p>Message : <br>' . $message . '</p>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if (!$mail->send()) {
            $msg .= 'Le message n\'a pas été envoyer , veuillez réessayer .';
            $msgCode = 'Mailer Error: ' . $mail->ErrorInfo;
            $succes = 0;
        } else {

            $msg .= 'Messege envoyer !';
            $succes = 1;


            $js = file_get_contents("email.json");
            $js = json_decode($js, true);
            if (!in_array($email, $js)) {
                $js[] =  $email;
                $js = json_encode($js);
                try {
                    file_put_contents("email.json", $js);
                    $msg = "In JSON file, ";
                } catch (Exception $th) {
                    $msg = "Not in JSON file ," . $th;
                };
                
        }
                $messagerie["nom"] = $nom;
                $messagerie["email"] = $email;
                $messagerie["phone"] = $phone;
                $messagerie["message"] = $message;
        
                
                $insert = file_get_contents("msg.json");
                $insert = json_decode($insert,  true);  
                $insert[] = $messagerie; 
                $insert = json_encode($insert);
                file_put_contents("msg.json", $insert);
            }
    } else {
        $msg = "L'email n'est pas au bon format.";
    }
} else {
    $msg = "Vous n'avez pas rempli tous les champs.";
}

$res = ["succes" => $succes, "msg" => $msg, "msgCode" => $msgCode];

echo json_encode($res);
