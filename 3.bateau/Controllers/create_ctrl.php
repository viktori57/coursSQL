<?php
$bdd = new PDO
(
    'mysql:host=localhost; dbname=bateau; charset=utf8;',
    'viktor',
    'Azerty123'
);

if (isset($_POST) && !empty($_POST)) {
    $insert = $bdd->prepare('INSERT INTO bateaux (nom, modele, taille, proprietaire) VALUES (?, ?, ?, ?)');
    $insert->execute(array(
        $_POST['nom'],
        $_POST['modele'],
        $_POST['taille'],
        $_POST['owner'],
    ));
}    
header('Location: ../index.php');