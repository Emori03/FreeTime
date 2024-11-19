<?php
$host = '127.0.0.1';
$db = 'freetime';
$user = 'freetime';
$pass = 'FreeTime09$';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
    // Crear una nueva conexión PDO
    $conexion = new PDO($dsn, $user, $pass);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Manejo de errores en caso de fallo de conexión
    echo "Error en la conexión: " . $e->getMessage();
}
?>