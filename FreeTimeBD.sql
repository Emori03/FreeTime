CREATE TABLE users(  
    UserId int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    UserName VARCHAR(255) COMMENT 'Nombre del usuario',
    UserEmail VARCHAR(255) COMMENT 'Correo electronico del usuario',
    UserPassword VARCHAR(255) COMMENT 'Contraseña del usuario'
) COMMENT '';