<?php

$server = $_POST['server'];
$database = $_POST['db'];
$user = $_POST['user'];
$pass = $_POST['pass'];
$query = $_POST['query'];
$connectionInfo = array("Database" => $database, "UID" => $user, "PWD" => $pass);
$conn = sqlsrv_connect($server, $connectionInfo);
$return = array();
if (!$conn) {
    $return = -1;//no se puede conectar bd
} else {
    $stmt = sqlsrv_query($conn, $query);
    if ($stmt === FALSE)
        $return = -2;
    else {
        while (sqlsrv_fetch($stmt)) {
            $return[] = array(
                'id' => sqlsrv_get_field($stmt, 0),
                'ini' => sqlsrv_get_field($stmt, 1),
                'fin' => sqlsrv_get_field($stmt, 2),
                'cost' => sqlsrv_get_field($stmt, 3),
                'orig' => sqlsrv_get_field($stmt, 4),
                'dest' => sqlsrv_get_field($stmt, 5),
                'chof' => sqlsrv_get_field($stmt, 6)
            );
        }
    }
}
echo json_encode($return);
?>
