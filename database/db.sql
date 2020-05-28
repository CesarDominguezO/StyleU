CREATE DATABASE StyleU;

USE StyleU;

CREATE TABLE TEST(
    medida VARCHAR (2) NOT NULL,
    altura CHAR (3) NOT NULL,
    peso CHAR (3) NOT NULL,
    tallap CHAR (2) NOT NULL,
    tallac CHAR (3) NOT NULL,
    tallaz CHAR (8) NOT NULL,
    pantalonc VARCHAR (5),
    hombro CHAR (3),
    busto CHAR (3),
    cintura CHAR (3),
    cadera CHAR(3),
    cuerpo VARCHAR (10) NOT NULL,
    kibby VARCHAR (10) NOT NULL,
    piel VARCHAR (10) NOT NULL,
    estilo VARCHAR (10) NOT NULL,
    resaltar VARCHAR (6),
    colors VARCHAR (6),
    colorn VARCHAR (6),
    patrons VARCHAR (6),
    patronn VARCHAR (6),
    comoda VARCHAR (2) NOT NULL,
    trabajo VARCHAR (2) NOT NULL,
    deportiva VARCHAR (2) NOT NULL,
    vestido VARCHAR (2) NOT NULL,
    noche VARCHAR (2) NOT NULL,
    precio INT (4) NOT NULL,
    tiempo CHAR (2) NOT NULL,
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
    nombre VARCHAR(10) NOT NULL,
    apellidop VARCHAR(10) NOT NULL,
    apellidom VARCHAR(10),
    contra VARCHAR(8) NOT NULL,
    ciudad VARCHAR(10) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    país VARCHAR(10) NOT NULL,
    calle VARCHAR(10) NOT NULL,
    num CHAR(10) NOT NULL,
    col VARCHAR(10) NOT NULL,
    cp CHAR(5) NOT NULL,
    ide INT(8) NOT NULL,
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

CREATE TABLE COMPRAN(
    idc INT(8) NOT NULL AUTO_INCREMENT,
    email VARCHAR(30) NOT NULL,
    codigo INT(12) NOT NULL,
    PRIMARY KEY (idc),
    FOREIGN KEY (email) REFERENCES USUARIO(email),
    FOREIGN KEY (codigo) REFERENCES PRENDA(codigo)
);
ALTER TABLE COMPRAN ADD UNIQUE INDEX(idc);

CREATE TABLE REGISTRO(
    email VARCHAR(30) NOT NULL,
    nombre VARCHAR(10) NOT NULL,
    apellido VARCHAR(10) NOT NULL,
    contra VARCHAR(8) NOT NULL,
    PRIMARY KEY (email)
);