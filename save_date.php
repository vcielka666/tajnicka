<?php
$date = date("Y-m-d H:i:s");
file_put_contents("date.txt", $date . PHP_EOL, FILE_APPEND);
echo "Date saved: " . $date;
?>
