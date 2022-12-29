<?php
require('./lib/phpmailer/class.phpmailer.php');

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Port     = 587;
$mail->Host     = "smtp.gmail.com";
$mail->Username = "geekonabike2018@gmail.com";
$mail->Password = "Killer123@";
$mail->Mailer   = "smtp";
$mail->SetFrom($_POST["userEmail"], $_POST["userName"]);
$mail->AddReplyTo($_POST["userEmail"], $_POST["userName"]);
$mail->AddAddress("geekonabike2018@gmail.com");
$mail->Subject = $_POST["subject"];
$mail->WordWrap   = 80;
$mail->MsgHTML($_POST["phoneNumber"]."<br/>".$_POST["carYear"]."<br/>".$_POST["carMake"]
."<br/>".$_POST["subject"]."<br/>".$_POST["carVin"]."<br/>".$_POST["carMiles"]."<br/>".$_POST["carPrice"]
."<br/>".$_POST["carLocation"]."<br/>".$_POST["carSale"]."<br/>".$_POST["content"]);


foreach ($_FILES["attachment"]["name"] as $k => $v) {
    $mail->AddAttachment( $_FILES["attachment"]["tmp_name"][$k], $_FILES["attachment"]["name"][$k] );
}

$mail->IsHTML(true);

if(!$mail->Send()) {
	echo "<p class='error'>Problem in Sending Mail.</p>";
} else {
	echo "<p class='success'>Mail Sent Successfully.</p>";
}
?>
