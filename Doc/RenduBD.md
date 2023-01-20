Equipe MIAGiles :

CABROL Camille, BENSAADA Abdallah, KONUSHBAEVA Begimay, MOUSSOLNA Adam

# Rendu BD



## Introduction

Pour cette itération, nous devions fournir un modèle relationel ainsi que des contraintes permettant d'assurer l'intégrité de la base de donnée.

## Schéma Relationel

![img_1.png](img_1.png)

## Contraintes liées au contexte métier

Le stock logique et le stock phisique ne peuvent pas être inférieur à zéro
--> 
-StockLogique > 0
-StockPhysique >0

Le stock logique est forcément inférieur au stock physique 
--> 
StockLogique <= StockPhysique

Situations critiques :
Deux Paniers de deux utilisateurs différents en cours de validation simultannée peuvent mener à un problème :
Le stock logique peut tomber à zéro après la demande de validation de panier. Nous allons gérer cela dans la partie back-end et dans la partie BD :

En BD : un trigger empêchant de faire tomber le stock en dessous de zéro
En Back-end : si un tel trigger est renvoyé, il faut renvoyer au front-end le message d'échec de la transaction.


## Conclusion :

Bien qu'il manque encore des tables à modéliser, on peut déjà comprendre le schéma global de la base de donnée.
Nos objectifs pour la suite de l'itération sont d'incorporer de manière plus exhaustive les données relatives à la
base de données publique des médicaments.