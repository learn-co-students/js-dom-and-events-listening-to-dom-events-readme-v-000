// using this file is optional
// you can also load the code snippets in using your browser's console

//provides an alert when click on "main" on browser page

const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});


//tells you what key# is selected when you are in the inout box on browser page
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.which);
});

//prevent default behavior
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});


//a bubble event
let divs = document.querySelectorAll('div');

function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

//a capture event
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}

//trigger only the events want to triggering
const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
