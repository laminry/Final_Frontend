<?php
$data = json_decode(file_get_contents("php://input"));

include "db.php";


$sql = "INSERT INTO reservationtable (guestname, guestemail, guestpassid,guestroom,checkin,checkout,noadults,nochildren,additional) VALUES ('$data->inputname,inname,inemail,inpassid,inguestroom,incheckin,incheckout,innoadults,innochildren,inadditional')";

if ($data -> inname) {
    $qry = $conn -> query($sql);
    # code...
}

$conn->close();
?>