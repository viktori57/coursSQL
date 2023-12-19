<?php
require_once('../function/db.php');


if (isset($_POST) && !empty($_POST)) {
    $select = $bdd->prepare('SELECT * FROM livre WHERE ISBN=?');
    $select->execute(array(
        $_POST['isbn']
    ));
    $select = $select->rowCount();

    if ($select < 1) {
        $create = $bdd->prepare('INSERT INTO livre (titre, ISBN, résumé) VALUES (?, ?, ?)');
        $create->execute(array(
            $_POST['titre'],
            $_POST['isbn'],
            $_POST['resume']
        ));
    } else {
        echo '<script>
                alert("Ce ISBN existe déjà !"); 
                window.location.replace("../index.php")
            </script>';
    }
}