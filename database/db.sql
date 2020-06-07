CREATE DATABASE StyleU;

USE StyleU;

CREATE TABLE TEST(
    medida VARCHAR (14) NOT NULL,
    altura CHAR (3) NOT NULL,
    peso CHAR (3) NOT NULL,
    tallap CHAR (2) NOT NULL,
    tallac CHAR (3) NOT NULL,
    tallaz CHAR (8) NOT NULL,
    pantalonc VARCHAR (8),
    hombro CHAR (3),
    busto CHAR (3),
    cintura CHAR (3),
    cadera CHAR(3),
    cuerpo VARCHAR (10) NOT NULL,
    oseo1 VARCHAR (10) NOT NULL,
oseo2 VARCHAR (1) NOT NULL,
oseo3 VARCHAR (1) NOT NULL,
oseo4 VARCHAR (1) NOT NULL,
fisico1 VARCHAR (1) NOT NULL,
fisico2 VARCHAR (1) NOT NULL,
fisico3 VARCHAR (1) NOT NULL,
fisico4 VARCHAR (1) NOT NULL,
fisico5 VARCHAR (1) NOT NULL,
rasgo1 VARCHAR (1) NOT NULL,
rasgo2 VARCHAR (1) NOT NULL,
rasgo3 VARCHAR (1) NOT NULL,
rasgo4 VARCHAR (1) NOT NULL,
rasgo5 VARCHAR (1) NOT NULL,
piel1 VARCHAR (1) NOT NULL,
piel2 VARCHAR (1) NOT NULL,
piel3 VARCHAR (1) NOT NULL,
piel4 VARCHAR (1) NOT NULL,
piel5 VARCHAR (1) NOT NULL,
piel6 VARCHAR (10) NOT NULL,
piel7 VARCHAR (10) NOT NULL,
    estilo VARCHAR (100),
    resaltar VARCHAR (100),
    color VARCHAR (100),
    patron VARCHAR (100),
    comoda VARCHAR (2),
    trabajo VARCHAR (2),
    deportiva VARCHAR (2),
    vestido VARCHAR (2),
    noche VARCHAR (2),
    tiempo VARCHAR (10) NOT NULL,
    idt INT (8) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (idt)
);
ALTER TABLE TEST ADD UNIQUE INDEX(idt);

CREATE TABLE ESTILISTA(
    ide INT(8) NOT NULL AUTO_INCREMENT,
    email VARCHAR(30) NOT NULL,
    idt INT(8),
    nombre VARCHAR(10) NOT NULL,
    apellidop VARCHAR(10) NOT NULL,
    apellidom VARCHAR(10),
    tel CHAR(10) NOT NULL,
    numcuenta CHAR(20) NOT NULL,
    rfc VARCHAR(13) NOT NULL,
    salario CHAR(9) NOT NULL,
    ciudad CHAR(10),
    estado CHAR(10) NOT NULL,
    pais CHAR(10) NOT NULL,
    PRIMARY KEY (ide),
    FOREIGN KEY (idt) REFERENCES TEST(idt)
);
ALTER TABLE ESTILISTA ADD UNIQUE INDEX(ide);

CREATE TABLE PRENDA(
    codigo INT(12) NOT NULL AUTO_INCREMENT,
    marca VARCHAR(10),
    talla VARCHAR(2) NOT NULL,
    costo CHAR (3) NOT NULL,
    PRIMARY KEY (codigo)
);
ALTER TABLE PRENDA ADD UNIQUE INDEX(codigo);

CREATE TABLE USUARIO(
    email VARCHAR(30) NOT NULL,
    nombre VARCHAR(10),
    apellido VARCHAR(50),
    contra VARCHAR(8) NOT NULL,
    ciudad VARCHAR(10),
    estado VARCHAR(10),
    pais VARCHAR(10),
    calle VARCHAR(10),
    num CHAR(10),
    col VARCHAR(10),
    cp CHAR(5),
    cant VARCHAR(2),
    ide INT(8),
    idt INT(8),
    PRIMARY KEY (email),
    FOREIGN KEY (ide) REFERENCES ESTILISTA(ide),
    FOREIGN KEY (idt) REFERENCES TEST(idt)
);
ALTER TABLE USUARIO ADD UNIQUE INDEX(email);

CREATE TABLE ELIGEN(
    codigo INT(12) NOT NULL,
    ide INT(8) NOT NULL,
    PRIMARY KEY (codigo, ide),
    FOREIGN KEY (codigo) REFERENCES PRENDA(codigo),
    FOREIGN KEY (ide) REFERENCES ESTILISTA(ide)
);

CREATE TABLE CONTACT(
    correo VARCHAR(50) NOT NULL,
    asunto VARCHAR(50) NOT NULL,
    nombree VARCHAR(10) NOT NULL,
    mensaje VARCHAR(200) NOT NULL,
    PRIMARY KEY (correo)
);

CREATE TABLE NEWSLETTER(
    email VARCHAR(50),
);