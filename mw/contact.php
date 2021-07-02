<?php
    header("Access-Control-Allow-Origin: *", false);
    header("Access-Control-Allow-Headers: 'Origin, X-Requested-With, Content-Type, Accept'");

    require './smtp.php';
    
    if (isset($_POST['name']) && issset($_POST['email']) && isset($_POST['message'])){
    $contactName = trim($_POST['name']);
    $contactEmail = trim($_POST['email']);
    $contactMessage = trim($_POST['message']);

    $content = '<h1>This email was sent through contact form</h1>
                <strong>Name</strong><span>'.$contactName.'</span>
                <strong>E-Mail</strong><span>'.$contactEmail.'</span>
                <strong>Message</strong><span>'.$contactMessage.'</span>
                ';
                
    $status = sendEmail('You have a conact message', $content);

    if ($status === true){
        $response = array('status' => 1);
    }else{
        $response = array('status' => 0, 'message' => $status);
    }
}else{
    $response = array('status' => 0, 'message' => 'Required fields are empty');
}

    //header('Content-Type: application/json');
    echo json_encode($response);
 
 
    