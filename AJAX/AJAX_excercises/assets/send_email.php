<?php
  if(isset($_POST)) {
    #Stop the error message from the back
    error_reporting(0);
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];

    $domain = $_SERVER["HTTP_HOST"];
    $to = "oregonz.go@gmail.com";
    $subject = "Contact from the form in $domain";
    $message = "
      <p>
      Data sent form the site form <b>$domain</b>
      </p>
      <ul>
        <li>Name: <b>$name</b></li>
        <li>Email: <b>$email</b></li>
        <li>Subject: $subject</li>
        <li>Comments: $comments</li>
      </ul>
    ";
    $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html"."charset=utf-8\r\n"."From: Auto Send No Reply <no-reply@$domain>";

    $send_mail = mail($to, $subject, $message, $headers);
    if ($send_mail) {
      $res = [
        "err" => false,
        "message" => "Your data has been sent"
      ];
    } else {
      $res = [
        "err" => true,
        "message" => "Error sending data, try again",
      ];
    }
    header("Access-Control-Allow-Origin: *"); // infinite requests
    //header("Access-Control-Allow-Origin: //domain"); //only accepts requests from domain
    header("Content-Type: application/json");
    echo json_encode($res);
    exit;
  }
  