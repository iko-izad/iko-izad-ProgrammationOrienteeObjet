let voiture = {
    // propriétes de voiture
    couleur : "jaune",
    forme : "arrondie",
    taille : "petite",

    // Méthodes de la vioture 
    demarrer : function () {
        console.log("Vvvrrrrrruummmm !!!!");
    },

    avancer : function () {
        console.log("avancerrrrrrrrrr !!!!");
    },
    
      // Méthodes de la voiture 
      reculer : function () {
        console.log("reculerrrrrrrrr !!!!");
    },

   
}


// La valeur de la propriété taille devient
console.log(voiture.taille);
// On ajoute la nouvelle propriété nombrerRoue dont la veleur est 2
console.log(voiture.nombreRoue = 2);

console.log("Couleur de la voiture :", voiture.couleur);
console.log("Forme de la voiture :", voiture.forme); 
console.log(typeof voiture);
voiture.demarrer();

// Voiture(c, f, t) fonction constructeur d'objet voiture
function Voiture(c, f, t) {
    // Propriété de chaque modèle d'objet voiture à construire
    this.couleur = c;
    this.forme = f;
    this.taille = t;

    // Méthode de chaque modèle d'objet voiture à construire
    this.avancer = function () {
        console.log("avancerrrrrrrrrr !!!!");
    },

    this.reculer = function () {
        console.log("reculerrrrrrrrr !!!!");
    }

    
}

// Crée une voiture à partir du constructeur d'objet Voiture grâce au mot-clé "new"
let voiture1 = new Voiture("rouge", "carré", "grande");

// Accède à la couleur de l'objet voiture1
console.log(voiture1.couleur); 

// Fait appel à la méthode demarrer() de l'objet voiture1
voiture1.avancer(); 

let voiture2 = new Voiture("bleue", "arrondie", "moyenne");
console.log(voiture2.couleur); 
voiture2.reculer(); 

// Constructeur d'objet Utilisateur
function Utilisateur(nom, prenom, dateNaissance, ville, age) {
    // Propriétés de l'utilisateur
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.ville = ville;
    this.age = age;

    // Méthode de chaque modèle d'objet voiture à construire
    this.courrir = function() {
        console.log("courrrrr");
    },

    this.marcher = function() {
        console.log("marcheeeeee");
    },

    this.sauter = function() {
        console.log("sautééé");
    },

    this.lire = function() {
        console.log("lireeeeee");
    },
    this.ecrire = function() {
        console.log("écrireeee");
    },
    this.reciter = function() {
        console.log("réciterrrrrr")
    };

}

let utilisateur1 = new Utilisateur("bob", "Jean", "1990-05-15", "Paris", 33);
console.log(utilisateur1.nom);
utilisateur1.sauter(); 