// The EventTarget method addEventListener() sets up a function that will be
// called whenever the specified event is delivered to the target.

// Common targets are Element, Document, and Window, but the target may be any
// object that supports events (such as XMLHttpRequest).

addEventListener() works by adding a function or an object that implements EventListener to the list of event listeners for the specified event type on the EventTarget on which it's called.

const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.which);
});

// The Event interface's preventDefault() method tells the user agent that if
// the event does not get explicitly handled, its default action should not be
// taken as it normally would be. The event continues to propagate as usual,
// unless one of its event listeners calls stopPropagation() or
// stopImmediatePropagation(), either of which terminates propagation at once.

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});

// Bubbling vs Capturing

let divs = document.querySelectorAll('div');

function bubble(e) {

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

// Bubbling + Event.stopPropagation()

const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
