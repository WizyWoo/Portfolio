function toggleProgrammingElements() {
  const programmingElements = document.querySelectorAll('.programming');
  programmingElements.forEach(element => {
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
  const gameDesignElements = document.querySelectorAll('.game-design');
  gameDesignElements.forEach(element => {
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {      
      element.style.display = 'none';
    }});

    toggleButtonText();

}

const toggleButton = document.querySelector('#toggle-button');
toggleButton.addEventListener('click', toggleProgrammingElements);

function toggleButtonText() {
  if (toggleButton.innerHTML === 'Game Design') {
    toggleButton.innerHTML = 'Programming';
  } else {
    toggleButton.innerHTML = 'Game Design';
  }
}