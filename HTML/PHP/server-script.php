<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $lastName = $_POST["last-name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "N/A"; // Replace with email
    $subject = "New Contact Form Submission";
    $messageBody = "Name: $name $lastName\nEmail: $email\nMessage: $message";
    
    $result = mail($to, $subject, $messageBody);
    
    if ($result) {
        echo json_encode(array("message" => "Form submitted successfully"));
    } else {
        echo json_encode(array("message" => "Failed to submit form"));
    }
}
?>
