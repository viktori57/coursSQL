CREATE DATABASE BATEAU;

USE BATEAU;

CREATE TABLE IF NOT EXISTS bateaux (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    modele VARCHAR(255) NOT NULL,
    taille FLOAT,
    proprietaire VARCHAR(255) NOT NULL,
    id_carnet INT(11) NOT NULL,
    CONSTRAINT FK_carnetExists FOREIGN KEY (id_carnet) REFERENCES carnet_entretien (id)
);

CREATE TABLE IF NOT EXISTS carnet_entretien (
    ID INT(11) PRIMARY KEY AUTO_INCREMENT,
    type ENUM("moteur", "éléctricité", "électronique", "circuit eau douce", "coque", "gréement") NOT NULL,
    periodicite INT(11) NOT NULL,
    last DATE,
    next DATE NOT NULL,
    id_bateau INT(11) NOT NULL,
    CONSTRAINT FK_BateauExist FOREIGN KEY (id_bateau) REFERENCES bateaux (id)
);

CREATE TABLE IF NOT EXISTS ports (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS trajets (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_bateau INT(11) NOT NULL,
    id_ports_depart INT(11) NOT NULL,
    id_ports_arrivee INT(11) NOT NULL,
    longitude DECIMAL(11, 8),
    latitude DECIMAL(10, 8),
    CONSTRAINT FK_BateauExists2 FOREIGN KEY (id_bateau) REFERENCES bateaux (id),
    CONSTRAINT FK_PortDepartExist FOREIGN KEY (id_ports_depart) REFERENCES ports(id),
    CONSTRAINT FK_PortArriveeExist FOREIGN KEY (id_ports_arrivee) REFERENCES ports(id)    
);