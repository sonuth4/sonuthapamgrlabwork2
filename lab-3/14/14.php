<?php
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'locations_db';


$conn = new mysqli($host, $user, $password, $dbname);


if ($conn->connect_error) {
    die('Database connection failed: ' . $conn->connect_error);
}


if (isset($_POST['country_id'])) {
    $country_id = intval($_POST['country_id']);

    
    $stmt = $conn->prepare("SELECT id, name FROM cities WHERE country_id = ?");
    $stmt->bind_param('i', $country_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $cities = [];
    while ($row = $result->fetch_assoc()) {
        $cities[] = $row;
    }

    
    echo json_encode($cities);

    $stmt->close();
}

$conn->close();
?>
