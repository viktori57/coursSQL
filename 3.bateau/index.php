<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Gérer les bateaux</title>
    <style>
        table,tr,th,td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 20px;            
        }
        th, td {            
            width: 200px;
        }
    </style>
</head>
<body>
    <form action="">
        <table>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Modèle</th>
                <th>Taille</th>
                <th>Propriètaire</th>
                <th>ID Carnet</th>
            </tr>
            <?php
                require_once('./Controllers/read_ctrl.php');
                foreach($ListBateau as $bateau) {
                    echo "<tr>";
                    foreach ($bateau as $colonne) {
                        echo "<td>$colonne</td>";
                    }
                    echo "<td>
                    <button name='update' value='" . $bateau['id'] . "'>Modifier</button>
                    <button formaction='' name='delete' value='" . $bateau['id'] . "'>Supprimer</button>
                    </td>";
                    echo "</tr>";
                }
            ?>
        </table>
    </form>
</body>
</html>