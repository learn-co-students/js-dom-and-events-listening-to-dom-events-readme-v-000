// using this file is optional
// you can also load the code snippets in using your browser's console
let main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

let element = document.createElement('div')

element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = '#f9f9f9';

document.body.appendChild(element);