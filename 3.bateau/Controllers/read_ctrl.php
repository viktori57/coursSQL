<?php
$bdd = new PDO
(
    'mysql:host=localhost; dbname=bateau; charset=utf8;',
    'viktor',
    'Azerty123'
);
$ListBateau = $bdd->prepare('SELECT * FROM bateaux');
$ListBateau->execute();
$ListBateau = $ListBateau->fetchAll(PDO::FETCH_ASSOC);