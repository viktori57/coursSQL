<?php
include("functions/bdd.php");
try {
    // Connexion à la base de données avec PDO
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    // Configuration de PDO pour qu'il lance des exceptions en cas d'erreur
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupération des livres
    $stmt = $conn->prepare("SELECT id, titre, ISBN, resume FROM livre");
    $stmt->execute();

    // Définition du mode de récupération
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $livres = $stmt->fetchAll();

} catch(PDOException $e) {
    echo "Erreur de connexion: " . $e->getMessage();
}

// Vérification si la variable $livres est définie et non vide
if (!empty($livres)) {
    // Affichage des livres
    echo "<table>";
    echo "<tr><th>ID</th><th>Titre</th><th>ISBN</th><th>Résumé</th><th>Actions</th></tr>";

    foreach ($livres as $livre) {
        echo "<tr>";
        echo "<td>" . $livre['id'] . "</td>";
        echo "<td>" . htmlspecialchars($livre['titre']) . "</td>";
        echo "<td>" . htmlspecialchars($livre['ISBN']) . "</td>";
        echo "<td>" . htmlspecialchars($livre['resume']) . "</td>";
        echo "<td>
            <a href='./Views/read.php?id=" . $livre['id'] . "'>Afficher</a>
            <a href='./Views/update.php?id=" . $livre['id'] . "'>Modifier</a>
            <a href='./Controllers/delete_ctrl.php?id=" . $livre['id'] . "'>Supprimer</a>
        </td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "Aucun livre trouvé.";
}

echo "<a href='./Views/create.php'>Ajouter un nouveau livre</a>";
?> <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./functions/style.css">
</head>
<body>
    
</body>
</html>