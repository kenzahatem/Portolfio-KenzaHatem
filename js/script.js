document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-inner .item');
    const totalItems = items.length;
    let currentIndex = 0;

    function showItem(index) {
        const translateXValue = -index * 100;
        itemsContainer.style.transform = `translateX(${translateXValue}%)`;
    }

    window.showNextItem = function() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    window.showPreviousItem = function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }
});


// Texte à afficher
const text = "Bienvenue 👋";
const welcomeText = document.getElementById("welcome-text");

// Fonction pour écrire le texte progressivement
function typeWriter(text, element, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Ajoute une lettre
            i++;
            setTimeout(type, speed); // Délai entre chaque lettre
        } else {
            // Ajoute l'animation du curseur clignotant
            element.style.borderRight = "2px solid #333";
            element.style.animation = "blink-cursor 0.75s step-end infinite";
        }
    }
    type();
}

// Démarrer l'effet
typeWriter(text, welcomeText);
