//Selectors
const background = document.querySelector('.wrapper');
const button = document.querySelector('.button');
const result = document.querySelector('.span');

//Color
const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


button.addEventListener('click', function() {
  let hash = '#';
  for (i=0; i<6; i++) {
    hash += color[number()];
  }
  
  background.style.backgroundColor = hash;
  result.innerText = hash;
});

function number() {
  return Math.floor(Math.random() * color.length);
}