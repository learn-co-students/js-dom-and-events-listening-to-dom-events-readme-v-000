// using this file is optional
// you can also load the code snippets in using your browser's console
const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});