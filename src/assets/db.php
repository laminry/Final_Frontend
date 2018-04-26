<?php

header("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Heades: Origin, X-Required-with, Content-Type, Accept");

$servername = "localhost";
$username = "root";
$password = "enter";
$dbname = "ngproject";

$conn = new mysqli($servername,$username,$password,$dbname);

?>
