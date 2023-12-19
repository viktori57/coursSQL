<?php
require_once('../function/db.php');


if (isset($_POST) && !empty($_POST)) {
    $update = $bdd->prepare('UPDATE livre SET titre=?, ISBN=?, résumé=? WHERE id=?');
    $update->execute(array(
        $_POST['titre'],
        $_POST['isbn'],
        $_POST['resume'],
        $_POST['id']
    ));
}
header('Location: ../index.php');