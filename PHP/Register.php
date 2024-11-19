<?php
require_once 'Conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users(UserName, UserEmail, UserPassword) VALUES (:user, :email, :pass)";

    if ($registro = $conexion->prepare($sql)) {
        $registro->bindParam(":user", $nombre);
        $registro->bindParam(":email", $email);
        $registro->bindParam(":pass", $password);

        if ($registro->execute()) {
            echo "Registro creado exitosamente.";
        } else {
            echo "Error al registrar: " . $registro->error;
        }
    } else {
        echo "Error en la preparación de la consulta: " . $conexion->error;
    }
}
?>