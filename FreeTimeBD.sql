CREATE DATABASE freetime;

USE freetime;

CREATE TABLE users(  
    UserId int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    UserName VARCHAR(255) COMMENT 'Nombre del usuario',
    UserEmail VARCHAR(255) COMMENT 'Correo electronico del usuario',
    UserPassword VARCHAR(255) COMMENT 'Contraseña del usuario'
) COMMENT '';

INSERT INTO users(UserName, UserEmail, UserPassword)
VALUES ('test', 'test@test.com', 'test09');

CREATE TABLE productos(
    ProductId INT NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    ProductName VARCHAR(255) COMMENT 'Nombre del producto',
    ProductDescription VARCHAR(255) COMMENT 'Descripción del producto',
    ProductPrice DECIMAL(10,2) COMMENT 'Precio del producto'
) COMMENT 'Lista de productos';

CREATE Table productosDetalles(
    ProductId INT NOT NULL COMMENT 'ProductoID',
    ProductStock INT NOT NULL COMMENT 'Existencia de productos'
) COMMENT 'Detalles de los productos';

ALTER TABLE productosDetalles
ADD CONSTRAINT FK_Productos_ProductosDetalles
FOREIGN KEY (ProductId) REFERENCES productos(ProductId);

