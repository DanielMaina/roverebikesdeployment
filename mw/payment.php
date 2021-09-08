<?php

/**
 *  An example CORS-compliant method.  It will allow any GET, POST, or OPTIONS requests from any
 *  origin.
 *
 *  In a production environment, you probably want to be more restrictive, but this gives you
 *  the general idea of what is involved.  For the nitty-gritty low-down, read:
 *
 *  - https://developer.mozilla.org/en/HTTP_access_control
 *  - https://fetch.spec.whatwg.org/#http-cors-protocol
 *
 */

function cors() {
    
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
    
    
}

cors();

require 'vendor/autoload.php';
require './smtp.php';

// This is a sample test API key. Sign in to see examples pre-filled with your key.
\Stripe\Stripe::setApiKey('sk_test_51J1eaAAEoDFgQQjksl9BSG9nj3T6c5dVmAPG0SzozlNvHup62Lrrrwde2mHsqjZfOuQrDUJOlBg4SwPRBofiuKoh00SPe4g079');


function calculateOrderAmount(float $total): float {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // customers from directly manipulating the amount on the client
  return $total * 100;
}

header('Content-Type: application/json');

try {

  $orderID = time();

  // retrieve JSON from POST body
  $json_str = file_get_contents('php://input');
  $json_obj = json_decode($json_str);

  $paymentIntent = \Stripe\PaymentIntent::create([
    'amount' => calculateOrderAmount($json_obj->total),
    'currency' => 'cad',
    'metadata' => [
      'order_id' => $orderID,
      'email' => $json_obj->data->email,
      'name' => $json_obj->data->name,
      'last_name' => $json_obj->data->last_name,
      'street' => $json_obj->data->street,
      'country' => $json_obj->data->country,
      'city' => $json_obj->data->city,
    ],
  ]);

  $output = [
    'clientSecret' => $paymentIntent->client_secret,
  ];

  $response = json_encode($output);

  if (isset($response['status']) && $response['status'] === 'succeeded'){
    $content = '<h3>You have a new order</h3><br/>
                <strong>Name:</strong> <span>'.($json_obj->data->name.' '.$json_obj->data->last_name).'</span><br/>
                <strong>E-Mail:</strong> <span>'.$json_obj->data->email.'</span><br/>
                <strong>Order ID:</strong> <span>'.$orderID.'</span><br/>
                ';

    $status = sendEmail('You have a message', $content);

  }
  echo $response;
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}