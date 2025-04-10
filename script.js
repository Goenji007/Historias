// Inicializar Twemoji
window.onload = function() {
    twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg'
    });
};

// Variables y elementos
const generateBtn = document.getElementById('generateBtn');
const newStoryBtn = document.getElementById('newStoryBtn');
const formContainer = document.querySelector('.form-container');
const storyContainer = document.getElementById('storyContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const storyTitle = document.getElementById('storyTitle');
const storyContent = document.getElementById('storyContent');

// Títulos aleatorios para las historias
const storyTitles = [
    "La Gran Aventura de Curación",
    "Un Día Especial con Panda y Mono",
    "La Misión de Ayuda Mágica",
    "El Problema Especial",
    "El Rescate Increíble",
    "Una Lección para Recordar",
    "La Sorpresa del Doctor Mono",
    "El Plan Secreto de la Enfermera Panda",
    "Un Momento de Valentía",
    "El Misterio del Día Extraño",
    "La Solución Inesperada",
    "Aventuras"
];

// Función para generar una historia aleatoria (simulada)
function generateRandomStory(childName, place, problem, friend, weather, magicObject, ending) {
    const namePart = childName ? `${childName}, ` : '';
    return `Érase una vez, en un hermoso ${place} bajo un cielo ${weather}, ${namePart}se encontró con un problema: ¡${problem}! La Enfermera Panda y el Doctor Mono llegaron para ayudar. Junto con su amigo el ${friend}, usaron la ${magicObject} para superar el desafío. Al final, hubo una gran ${ending}.`;
}

// Función para mostrar la historia y ocultar el formulario
function displayStory(title, content) {
    storyTitle.textContent = title;
    storyContent.innerHTML = ''; // Limpiar contenido anterior
    const paragraphs = content.split('. ');
    paragraphs.forEach(paragraph => {
        const pElement = document.createElement('p');
        pElement.classList.add('story-paragraph');
        pElement.textContent = paragraph + '.';
        storyContent.appendChild(pElement);
        // Añadir animación de aparición gradual
        setTimeout(() => {
            pElement.style.opacity = 1;
        }, 100 * paragraphs.indexOf(paragraph));
    });
    formContainer.style.display = 'none';
    loadingIndicator.style.display = 'none';
    storyContainer.style.display = 'block';
}

// Evento para generar la historia
generateBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const childName = document.getElementById('childName').value.trim();
    const place = document.getElementById('place').value;
    const problem = document.getElementById('problem').value;
    const friend = document.getElementById('friend').value;
    const weather = document.getElementById('weather').value;
    const magicObject = document.getElementById('magicObject').value;
    const ending = document.getElementById('ending').value;

    // Mostrar indicador de carga
    formContainer.style.display = 'none';
    storyContainer.style.display = 'none';
    loadingIndicator.style.display = 'block';

    // Simular un tiempo de carga para la generación de la historia
    setTimeout(() => {
        const randomTitle = storyTitles[Math.floor(Math.random() * storyTitles.length)];
        const generatedStory = generateRandomStory(childName, place, problem, friend, weather, magicObject, ending);
        displayStory(randomTitle, generatedStory);
    }, 2000); // Simula 2 segundos de carga
});

// Evento para crear una nueva historia
newStoryBtn.addEventListener('click', function() {
    storyContainer.style.display = 'none';
    formContainer.style.display = 'block';
    storyContent.innerHTML = ''; // Limpiar la historia anterior
});
