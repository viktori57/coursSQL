/*Créer une base de donnée qui ce nomme magasin 
et qui posséde trois table

Une table client avec 6 colonne
id int 
prenom string
nom string
email string
ville string
password string
Id est primaire en incrémentation automatique

Une table commande avec 5 colonnes
id int
client id int
date_achat date
reference string
cache prix total nombre à virgule
Id est primaire en incrémentation automatique

Une table produit avec 4 colonnes
id int
nom string
quantité nombre à virgule
prix nombre à virgule
Id est primaire en incrémentation automatique

 
 
 */ 
/* pour creer une base de donnee dans mysql */
 CREATE DATABASE magasin;

USE magasin;

CREATE TABLE client (
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    prenom VARCHAR(255),
    nom VARCHAR(255),
    email VARCHAR(255),
    ville VARCHAR(255),
    password VARCHAR(255)
);

/* pour inserer des donnees dans le tableau on fait INSERT INTO exemple ci dessous */

INSERT INTO client (prenom, nom, email, ville, password) VALUES 
('Bernard', 'Lermitte', 'lermitte@null', 'null', 'bernardo'), 
('Clautide', 'Lafond', 'clauclau@null', 'null', 'clau1234');

CREATE TABLE commande (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    client_id INT(11) NOT NULL,
    date_achat DATETIME NOT NULL,
    reference VARCHAR(255) NOT NULL,
    cache_prix_total FLOAT NOT NULL 
);



INSERT INTO commande (client_id, date_achat, reference, cache_prix_total) VALUES
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100),
(1, '2023-12-12 10:10:10', '001471', 100);

CREATE TABLE IF NOT EXISTS produit (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    quantite INT(11) NOT NULL,
    prix FLOAT NOT NULL
);

INSERT INTO produit (nom, quantite, prix) VALUES 
('Pomme', 10, 50),
('Casse Noisette', 100, 100),
('Noisette', 1000, 2);