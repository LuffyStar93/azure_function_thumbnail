![AzureLogo](https://qbd.eu/wp-content/uploads/azure-logo.png)
# Projet : Thumbnail converter

Dans le cadre de la formation MS CLOUD de l'école du numérique simplon.co, j'ai réalisé une fonction et mis en ligne via l'interface Azure Function. Cette fonction permet de réalisé une miniature (thumbnail) d'une image lors de son chargement dans un espace de stockage Azure Storage. Suite à cet upload, un mail est envoyé contenant l'image et sa miniature.

## Technologie utilisées
**JavaScript**

=> Les librairies

``` image-thumbnail```

``` nodemailer ```

**Microsoft Azure** 

=> Azure Function

=> Azure Storage

## Schéma d'intégration de la fonction

La fonction se déclenche quand un fichier est upload sur un dossier situé dans l'espace de stockage. => images/
L'image upload est récupéré, on réalise alors 
une miniature que l'on récupère en sortie et que l'on met dans un autre dossier de stockage. => imagesthumbnails/

 
## Etapes d'installation

1) Log in Azure Portal
2) Create a new resource gruop
3) Create a storage account with two containers => images/ and imagesthumbnails/
4) Create a new Function App
 => add a function with blob trigger storage and blob storage output
 => copy converter.js in the code+test section
6) Install all dependancies on kudu  https://docs.microsoft.com/fr-fr/azure/azure-functions/functions-reference-node?tabs=v2
 => use the package.json on the repository
 


## A propos

Dans ce dépot git vous trouverez :
index.js => Fonction qui permet de convertir une image et denvoyer un mail en local
converter.js => La meme fonction mise en ligne sur Azure Function

package.json => Package qui contient toutes les librairies nécessaires à la fonction

## Logs
Lors de l'exécution de la fonction on peut suivre la réalisation ou l'echec de l'opération.
