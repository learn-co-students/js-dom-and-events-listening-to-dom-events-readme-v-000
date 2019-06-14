// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
