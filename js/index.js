// USING THIS FILE IS OPTIONAL:
// You can also load the code snippets in using your browser's console
const main = document.getElementById('main');
// Start by adding a listener for click events to the main#main element in
// index.html.
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});
// we add an event listener to the input element.
const input = document.querySelector('input');
// The event has a number of useful properties on it — keypress, keydown, and
// keyup events, for example, will have a which property that tells us which
// key was pressed.

// input.addEventListener('keydown', function(e) {
//   console.log(e.which);
// });
// Let's test out preventing the default behavior of the input by keeping it
// from receiving the "g" character.
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});
// DOM events propagate by bubbling (starting at the target node and moving up
// the DOM tree to the root) and capturing (starting from the target node's
// parent elements and propagating down the tree until it reaches the target) —
// by default, events nowadays all bubble.
let divs = document.querySelectorAll('div');
// function bubble(e) {
//   // remember all of those fancy DOM node properties?
//   // we're making use of them to get the number
//   // in each div here!
//
//   // if `this` is a bit confusing, don't worry —
//   // for now, know that it refers to the div that
//   // is triggering the current event handler.
//   console.log(this.firstChild.nodeValue.trim() + ' bubbled');
// }
//
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', bubble);
// }

// In order to capture, we need to set the third argument to addEventListener
// to true.
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
// The event propagates from the top of the page towards the target node,
// triggering event handlers as appropriate along the way.
// Notice that the target node is the last node to capture the event, whereas
// it's the first node to bubble the event up.

// Let's rewrite the bubbling example to stop propagation so that only one
// event is triggered
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
