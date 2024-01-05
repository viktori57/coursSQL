<?php
$bdd = new PDO
(
    'mysql:host=localhost; dbname=bateau; charset=utf8;',
    'viktor',
    'Azerty123'
);

if (!empty($_GET)) {
    if (!empty($_GET['id'])) {
        $requete = 'SELECT * FROM bateaux WHERE id=?';
    }   else {
        $requete = 'SELECT * FROM bateaux';
    }
} else {
    $requete = 'SELECT * FROM bateaux';
}

$ListBateau = $bdd->prepare($requete);
$ListBateau->execute(
    $_GET ? 
        $_GET['id'] ? 
            array($_GET['id']) : 
        null : 
    null);

$ListBateau = $ListBateau->fetchAll(PDO::FETCH_ASSOC);