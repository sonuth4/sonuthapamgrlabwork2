<?php
function tenMostFrequentWords($input) {
    
    $cleanedInput = strtolower(preg_replace('/[^\w\s]/', '', $input));

    $words = explode(' ', $cleanedInput);

   
    $wordCounts = array_count_values($words);

   
    arsort($wordCounts);

  
    $mostFrequentWords = array_slice($wordCounts, 0, 10, true);

    
    echo "<h3>The 10 most frequent words are:</h3>";
    foreach ($mostFrequentWords as $word => $count) {
        if ($word !== "") {
            echo "<p>" . htmlspecialchars($word) . ": " . $count . "</p>";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Ten Most Frequent Words</title>
</head>
<body>
    <form method="post">
        <label for="input">Enter a string:</label><br>
        <textarea id="input" name="input" rows="5" cols="50" placeholder="Type your text here..."></textarea><br><br>
        <button type="submit">Submit</button>
    </form>

    <div>
        <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = $_POST['input'] ?? '';
            if (!empty($input)) {
                tenMostFrequentWords($input);
            } else {
                echo "<p>Please enter some text.</p>";
            }
        }
        ?>
    </div>
</body>
</html>
