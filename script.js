const template = document.getElementById('template');
const container = document.getElementById('card-container');
const cloneButton = document.getElementById('clone-card');

cloneButton.addEventListener('click', () => {
const clonedCard = template.cloneNode(true); // Deep clone
clonedCard.style.display = 'block';
container.appendChild(clonedCard);
});