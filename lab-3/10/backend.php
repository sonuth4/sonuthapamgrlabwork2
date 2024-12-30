<?php

$valid_userid = "sonu";
$valid_password = "12345";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userid = $_POST['userid'];
    $password = $_POST['password'];

    
    if ($userid === $valid_userid && $password === $valid_password) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
