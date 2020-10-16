<?php
    $header="MIME-Version: 1.0\r\n";
    $header.="Content-type: text/html; charset=iso-8859-1\r\n";
    $email_to = "info@decoderweb.com";
    $email_subject = "[PLAN STANDAR]- Cotización ";
    $email_message .= "Nombre: " . $_POST['nombre'] . "\n";
    $email_message .= "Telefono: " . $_POST['telefono'] . "\n";
    $email_message .= "E-mail: " . $_POST['email'] . "\n";
    $email_message .= "Mensaje: " . $_POST['mensaje'] . "\n";
    $exito=mail($email_to, $email_subject , $email_message,$header);    
    header('Location: ../pag_standar.html');
?> 