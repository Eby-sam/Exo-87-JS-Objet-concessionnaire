let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Contructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h",
};

let photo = document.getElementById("photo");
//Image
let image = document.createElement("img");
image.src = voiture.imgUrl;
image.style.width = "300px";
photo.prepend(image);

let description = document.getElementById("description");
//Les caractéristiques de la voiture dans une liste.
function character (text) {
    let liste = document.createElement("p");
    liste.innerHTML = text;
    description.appendChild(liste);
}

character(voiture.Nom);
character("Elle a " + voiture.nombresRoues + " roues");
character("Elle est de couleur " + voiture.Couleur);
character("C'est une " + voiture.Contructeur);
character("Son carburant est le " + voiture.Carburant);
character("Elle a " + voiture.nombrePortes + " portes");
character("Eggo a une autonomie de " + voiture.Autonomie);
character("Sa vitesse maximum est de " + voiture.vitesseMaxi);