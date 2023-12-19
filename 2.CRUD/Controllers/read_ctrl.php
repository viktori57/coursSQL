<?php
require_once './function/db.php';

$ListLivre = $bdd->prepare('SELECT * FROM livre');
$ListLivre->execute();
$ListLivre = $ListLivre->fetchAll(PDO::FETCH_ASSOC);

