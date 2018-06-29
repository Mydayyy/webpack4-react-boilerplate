<?php
header("Access-Control-Allow-Origin: *", 'Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"));

$url = 'https://www.google.com/recaptcha/api/siteverify';
$captchaData = array(
	'secret' => '#',
	'response' => $data->captcha
);
$options = array(
	'http' => array (

		'method' => 'POST',
		'content' => http_build_query($captchaData)
	)
);
$context  = stream_context_create($options);
$verify = file_get_contents($url, false, $context);
$captcha_success=json_decode($verify);

error_log(print_r($captcha_success,true));

if ($captcha_success->success != 1) {
	http_response_code(406);
    die();
}

$dataKeys = get_object_vars($data);

$controllKeys = array("fname" => '', "lname" => '', "firm" => '', "textarea" => '', "email" => '', "title" => "", "captcha" => "");

$errorArray = array_diff_key($dataKeys, $controllKeys);

if (!filter_var($data->email, FILTER_VALIDATE_EMAIL) || sizeof($errorArray) > 0) {
    http_response_code(400);
    $error = true;
}else{
    // no errors
    if (!$error) {

        $finalData = "";

        foreach ($data as $key => $value) {
			if ($key !== 'captcha') {
				$finalData .= "<tr><td>" . strip_tags($key) . "</td>" . "<td>" . strip_tags($value) . "</td><tr>";
			}
        }

        $to = "info@test.com";

        $subject = "Inquiry";

        $message = "
        <html>
            <head>
            </head>
            <body>
                <p>Hey</p>
                <table>
                    ". $finalData ."
                </table>
            </body>
        </html>
        ";

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: John Doe <info@test.com>' . "\r\n";
        $headers .= 'Cc:' . "\r\n";

        if(mail($to,$subject,$message,$headers)){
            http_response_code(200);
        } else {
            http_response_code(502);


        }
    }
}

?>
