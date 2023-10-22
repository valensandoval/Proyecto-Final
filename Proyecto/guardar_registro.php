<?php
$mysqli = new mysqli("localhost", "root", "", "proyecto");

if ($mysqli->connect_error) {
    die("Error de conexión a la base de datos: " . $mysqli->connect_error);
}

$priNombre = $_POST["pri-nombres"];
$segNombre = $_POST["seg-nombres"];
$priApellido = $_POST["pri-apellidos"];
$segApellido = $_POST["seg-apellidos"];
$numero = $_POST["numero"];
$email = $_POST["email"];
$contrasena = $_POST["contrasena"];
$conPassword = $_POST["repetir-contrasena"];

$sql = "INSERT INTO registro (PriNombre, SegNombre, PriApellido, SegApellido, Numero, Email, Contrasena, ConPassword) 
        VALUES ('$priNombre', '$segNombre', '$priApellido', '$segApellido', '$numero', '$email', '$contrasena', '$conPassword')";

if ($mysqli->query($sql) === TRUE) {
    echo "Registro exitoso.";
} else {
    echo "Error al registrar: " . $mysqli->error;
}

$mysqli->close();
?>
