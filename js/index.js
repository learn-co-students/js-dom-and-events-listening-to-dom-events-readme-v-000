const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  console.log(e.which);
});

const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});