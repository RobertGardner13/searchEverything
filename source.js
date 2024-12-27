// Part 3
// source.js
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
  // Generate a random color in hex format
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 

  // Change the background color of the document's body
  document.body.style.backgroundColor = randomColor;
});



// _r0b0t_