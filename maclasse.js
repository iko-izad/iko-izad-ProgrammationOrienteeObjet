// Définition de la classe Document
class Document {

    // Définissons le constructeur de la classe grâce au mot-clé constructor
    // Le constructeur est une méthode spéciale utilisée pour initialiser les objets créés à partir de cette classe.
    // Il prend trois paramètres : titre, nombrePage et auteur.
    constructor(titre, nombrePage, auteur){
        this.titre = titre;          // Propriété pour stocker le titre du document
        this.nombrePage = nombrePage; // Propriété pour stocker le nombre de pages du document
        this.auteur = auteur;        // Propriété pour stocker le nom de l'auteur du document
    }

    // Définition d'une méthode appelée description
    // Cette méthode permet d'afficher des informations sur l'objet Document dans la console.
    description() {
        console.log("Le titre du document est ", this.titre);         // Affiche le titre
        console.log("L'auteur est ", this.auteur);                    // Affiche le nom de l'auteur
        console.log("Le document contient ", this.nombrePage, "pages"); // Affiche le nombre de pages
    }
}

// Création de plusieurs objets (instances) de la classe Document
// Ces objets représentent différents documents avec leurs caractéristiques respectives.
let documentHtml = new Document("Introduction au HTML", 35, "Nourdine Combo");
let documentCss = new Document("Apprendre le CSS", 15, "Ali Fahar");
let documentJavascript = new Document ("Introduction au Javascript", 55, "Nissay Abdou");
let documentMySQL = new Document ("Apprendre MySQL", 25, "Fatima Ali");

// Appel de la méthode description pour chaque document afin d'afficher leurs détails dans la console
documentHtml.description();   // Affiche les détails du document HTML
documentCss.description();    // Affiche les détails du document CSS
documentJavascript.description(); // Affiche les détails du document JavaScript
documentMySQL.description();  // Affiche les détails du document MySQL
