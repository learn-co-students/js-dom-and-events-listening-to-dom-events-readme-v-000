// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

main.addEventListener('keypress', function(event) {
  alert(`The which: ${event.which} key was pressed!`);
});
