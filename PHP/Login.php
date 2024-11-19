<?php
require_once 'Conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['user'];
    $password = $_POST['password'];

    $sql = "SELECT UserId, UserName, UserEmail, UserPassword FROM users WHERE (UserName = :user OR UserEmail = :user) AND UserPassword = :pass";

    if ($ingreso = $conexion->prepare($sql)) {
        $ingreso->bindParam(":user", $user);
        $ingreso->bindParam(":pass", $password);

        if ($ingreso->execute()) {
            if ($ingreso->rowCount() > 0) {
                $resultados = $ingreso->fetchAll(PDO::FETCH_ASSOC);
                
                header('Content-Type: application/json');
                echo json_encode($resultados);
            } else {
                echo "No se encontraron registros.";
            }
        } else {
            echo "Error al registrar: " . $ingreso->error;
        }
    } else {
        echo "Error en la preparación de la consulta: " . $conexion->error;
    }
}
?>