<?php
require 'mailjet/vendor/autoload.php';
use \Mailjet\Resources;

$MJ_APIKEY_PUBLIC='313f29f4b7fb8e46aae7d2d01d29ac86';
$MJ_APIKEY_PRIVATE='insert when deploying';

$MY_EMAIL="iuliia@lepistina.com";
$TO_EMAIL="iuliia@lepistina.com";

$mj = new \Mailjet\Client($MJ_APIKEY_PUBLIC, $MJ_APIKEY_PRIVATE);

	if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $msg = $_POST['message'];
        $mail_body = "From:" . $name . "\n E-Mail:" . $email . "\n Message:\n" . $msg;

        $body = [
            'FromEmail' => $MY_EMAIL,
            'FromName' => "Me",
            'Subject' => 'Message from contact form',
            'Text-part' => $mail_body,
            'Recipients' => [
                [
                    'Email' => $TO_EMAIL
                ]
            ]
        ];

        $response = $mj->post(Resources::$Email, ['body' => $body]);
        var_dump($response-> getStatus());
    }
    else{
        echo 'Please enter valid data';
    }
?>