<?php
$bdd = new PDO
(
    'mysql:host=localhost; dbname=bateau; charset=utf8;',
    'viktor',
    'Azerty123'
);
if (isset($_POST) && !empty($_POST)) {
    $delete = $bdd->prepare('DELETE FROM bateaux WHERE id=?');
    $delete->execute(array(
        $_POST['delete']
    ));
}
header('Location: ../index.php');vIKTORIAVV