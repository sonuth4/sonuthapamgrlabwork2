<?php
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'my_database';


$conn = new mysqli($host, $user, $password, $dbname);


if ($conn->connect_error) {
    die('Database connection failed: ' . $conn->connect_error);
}


if (isset($_POST['username'])) {
    $username = trim($_POST['username']);

    
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();

    
    if ($result->num_rows > 0) {
        echo "Username is available.";
    } else {
        echo "Username not found.";
    }

    $stmt->close();
}

$conn->close();
?>
