<?php
    $header="MIME-Version: 1.0\r\n";
    $header.="Content-type: text/html; charset=iso-8859-1\r\n";
    $email_to = "info@decoderweb.com";
    $email_subject = "Contacto desde el sitio web (footer)";
    $email_message .= "E-mail: " . $_POST['email'] . "\n";
    $exito=mail($email_to, $email_subject , $email_message,$header);    
    header('Location: ../contacto.html');
?>