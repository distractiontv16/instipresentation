const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentIndex = 0;

function showSlide(index) {
    // Calcul du déplacement
    const displacement = -index * 100;
    // Application de la transformation
    slides.style.transform = `translateX(${displacement}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    showSlide(currentIndex);
}

// Ajout des écouteurs d'événements pour les boutons
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Changer const en let pour permettre la réassignation
let autoSlide = setInterval(nextSlide, 10000); // Augmenté à 8 secondes

// Arrêter le défilement automatique lors du survol
slides.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

// Reprendre le défilement automatique après le survol
slides.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 8000);
});

// Afficher la première slide au chargement
showSlide(0);

document.addEventListener('DOMContentLoaded', function() {
    const btnLirePlus = document.querySelector('.btn-lire-plus');
    const messageSuite = document.querySelector('.message-suite');
    const message = document.querySelector('.message');
    
    btnLirePlus.addEventListener('click', function() {
        messageSuite.classList.toggle('hidden');
        message.classList.toggle('expanded');
        
        if (messageSuite.classList.contains('hidden')) {
            btnLirePlus.textContent = 'Lire plus';
        } else {
            btnLirePlus.textContent = 'Lire moins';
        }
    });
});

// Filtrage des formations
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const formationCards = document.querySelectorAll('.formation-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            formationCards.forEach(card => {
                if (filter === 'tous') {
                    card.style.display = 'block';
                } else if (card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', function() {
        // Trouve le conteneur parent le plus proche
        const cardContent = this.closest('.card-content');
        // Cherche les détails uniquement dans ce conteneur
        const detailsSection = cardContent.querySelector('.details-supplementaires');
        
        detailsSection.classList.toggle('hidden');
        
        // Change le texte du bouton
        this.textContent = detailsSection.classList.contains('hidden') ? 
            'Plus de détails' : 'Moins de détails';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentSlide = 0;

    function showSlide(n) {
        // Masquer tous les slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Gérer la boucle des slides
        currentSlide = (n + slides.length) % slides.length;

        // Afficher le slide actif
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Événements pour les boutons précédent/suivant
    prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

    // Événements pour les points de navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Défilement automatique optionnel
    setInterval(() => showSlide(currentSlide + 1), 5000);
});
