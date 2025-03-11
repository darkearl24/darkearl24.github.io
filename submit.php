<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    
    $to = "bala.earlconrad321@gmail.com"; 
    $subject = "New Form Submission from $name";
    $headers = "From: $email";
    
    // mail($to, $subject, $message, $headers); // Uncomment if you have email setup

    echo "Thank you for your message!";
}
?>
