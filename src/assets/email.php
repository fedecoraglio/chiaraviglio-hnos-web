<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_email = $request->email;
	$message = $request->message;
	$from_name = $request->name;
	$fron_phone = $request->phone;

	$to_email = "contacto@chiarahnos.com.ar";

	$contact = "<p><strong>Nombre:</strong> $from_name</p>
							<p><strong>Email:</strong> $from_email</p>
							<p><strong>Telefono:</strong> $from_phone</p>";
	$content = "<p><strong>Mensaje:</strong> $message</p>";

	$website = '[Chiaraviglio Hnos] - Consulta desde chiaravigliohnos.com.ar';
	$email_subject = "$website: $from_name";

	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: contacto@chiarahnos.com.ar\n";
	$headers .= "Reply-To: $from_email";

	mail($to_email,$email_subject,$email_body,$headers);

	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>