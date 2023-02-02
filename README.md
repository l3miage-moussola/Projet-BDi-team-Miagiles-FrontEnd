# Projet-BDi-team-Miagiles partie Front end
### Projet BDi de la team des Miagiles (groupe 4)

### Introduction

&nbsp;&nbsp;&nbsp;&nbsp;L'objectif de ce projet était de démontrer nos capacités à construire une application de gestion de
données avec des accès concurrentiels. Nous devions mettre en œuvre nos compétences acquises en
BDA ainsi qu'en AFMP, IHM et P&C, et cela à travers une application de
réservation/programmation centrée sur la gestion de données. Elle repose sur une architecture
client-serveur trois tiers. L'accent était mis sur le respect des propriétés ACID du système transactionnel.
Dans le présent rapport, nous allons exposer notre avancement tout en expliquant le cheminement qui nous
y a amené. Pour ce faire, nous allons dans un premier temps repréciser les objectifs de ce projet et monter
notre avancement par rapport à ces objectifs ainsi que les mises à jour que nous avons apportées depuis les 
rendus précédents. Nous allons ensuite parler des choix que nous avons du faire 
et qui expliquent l'état de notre avancement. Dans une dernière partie, nous présenterons nos méthodologies
de travail, notre organisation et nos difficultés rencontrées.

## I Les objectifs initiaux et l'état du projet
&nbsp;&nbsp;&nbsp;&nbsp;Ce projet comportait deux itérations. Nous avons déterminé en fonction du niveau technique de notre groups
qu'il serait plus raisonnable de nous concentrer sur les objectifs de l'itération 1. Ces objectifs étaient de
produire une application client-serveur avec les fonctionnalités suivantes :
### S'authentifier
  Ce qui fonctionne : authentification sans token
  Ce qui ne fonctionne pas : les mots de passes sont stockés en clair dans la base

### Ajouter un élément (référence et sa quantité) au panier
&nbsp;&nbsp;&nbsp;&nbsp;Ce qui fonctionne :
Un employé doit pouvoir ajouter des références à son panier
de commande.
Lors de l'ajout d'une référence hors stock, l'indication d'absence de stock et donc d’un délai
supplémentaire à la livraison est affichée avec une demande de confirmation.

&nbsp;&nbsp;&nbsp;&nbsp;Ce qui ne fonctionne pas :
Lors de l'ajout d'une référence dans le panier,
si elle est associée à des conditions de prescription et de délivrance (fichier CIS_CPD) une
alerte doit afficher la liste des prescriptions avec une validation nécessaire pour chacune
d'elle.

### Valider le panier
&nbsp;&nbsp;&nbsp;&nbsp;Ce qui fonctionne :
Un panier comprend une liste de références avec la quantité désirée pour chaque
référence et l'indication de disponibilité en stock. La durée de vie du panier n'est pas limitée,
mais la disponibilité des produits n’est pas garantie car il peut avoir été commandé par un
autre client depuis l’ajout dans le panier. Si un produit n’est plus disponible, l’employé est
prévenu et le système lui propose de l'enlever de la commande.

&nbsp;&nbsp;&nbsp;&nbsp;Ce qui fonctionne partiellement :
Lors de la validation un employé peut définir cette commande comme une commande-type
pour simplifier les futures commandes de l’établissement. Une commande-type n’est pas
modifiable.

&nbsp;&nbsp;&nbsp;&nbsp;Ce qui ne fonctionne pas :
Un employé valide son panier et obtient les documents (on se limite à la génération de
facture).

## II Nos choix
&nbsp;&nbsp;&nbsp;&nbsp;Pour notre BD, nous avons fait le choix de paramétrer son mode d'isolation sur READ COMMITED. Ce niveau d'isolation
permet d'assurer une meilleure cohérence des données que le READ UNCOMMITTED, mais une meilleure performance que le
SERIALIZABLE lors de forte affluences sur le site.

&nbsp;&nbsp;&nbsp;&nbsp;Nous avons également choisi l'utilisation d'un verrou optimiste sur la table Pres (Presentation sur le modèle) pour
gérer le scénario dans lequel 2 utilisateurs tentent de valider un panier simultanément alors qu'il n'y a assez de
stock que pour l'un des deux.

&nbsp;&nbsp;&nbsp;&nbsp;Pour l'IHM, nous avons choisi de reprendre des objets d'Angular materials, car ils sont répandus, ce qui contribue à
leur affordance dans la mesure où une grande partie des utilisateurs auront déjà été confrontés à des composants
similaires. (Comme une icone de caddie pour aller au panier par exemple).

## III Organisation et difficultés
&nbsp;&nbsp;&nbsp;&nbsp;Pour la partie d'analyse fonctionnelle, nous avons fonctionné au consensus : nous avons lu le sujet à 4,
avons débattu sur la façon de modéliser les BPMN, MCD et MLD ensembles jusqu'à obtenir un résultat
satisfaisant pour tout le monde. Pour l'initialisation de la BD, du Backend et du Frontend,
nous avons réparti les tâches comme suit : Une personne responsable de l'initialisation du front, une du back
et deux autres à effectuer des tâches selon là où la charge était la plus importante. Une fois que les squelettes
du front et du back terminés, nous nous sommes répartis des fonctionnalités et devions gérer le front ET le back
pour la fonctionnalité assignée.

## Conclusion
&nbsp;&nbsp;&nbsp;&nbsp;Les fonctionnalités principales de notre application fonctionnent. À savoir : S'authentifier, ajouter un produit
au panier, valider le panier et l'enregistrement de chacune de ces opérations en base de donnée. Cependant, nous
ne sommes pas satisfaits de notre gestion de la concurrence. Nous n'avons pas pris le temps necessaire pour tester tous les scenarii
de concurence d'accès aux données. Bien que nous soyons assurés que les données restent cohérentes en base, nous ne
gérons pas suffisament le transfert entre le back et le front pour une navigation compréhensible en cas de tentative de validation 
d'un produit qui était encore en stock au moment de l'ajout au panier. Sur une note plus générale, nous avons éprouvé
des difficultés à nous accorder sur les priorités des tâches et avons trouvé difficile de trouver un consensus pour avancer.

