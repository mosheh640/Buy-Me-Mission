<?php
require_once '../includes/db.php';
if(isset($_GET['taskID'])){
$text = $_GET['text'];
$taskID = $_GET['taskID'];
$query="update tasks set task='$text' where id='$taskID'";
$result = $mysqli->query($query); 

$json_response = json_encode($result);
}
?>

