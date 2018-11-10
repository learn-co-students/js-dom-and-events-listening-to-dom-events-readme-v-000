// add an event listener to the main element
const main = document.getElementById('main');

main.addEventListener('click', function (event) {
  alert('I was clicked!');
});

// shows what number each keystroke represents
const input = document.querySelector('input');

input.addEventListener('keydown', function (e) {
  console.log(e.which);
});

// prevent from printing the "g" letter
const input = document.querySelector('input');

input.addEventListener('keydown', function (e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});

// the result would be a bubbling event:
// pressing div with "5" will print:
// 5 bubbled
// 4 bubbled
// 3 bubbled
// 2 bubbled
// 1 bubbled
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

// capture event. the div "5" will now print:
// 1 captured
// 2 captured
// 3 captured
// 4 captured
// 5 bubbled
// 5 captured
// 4 bubbled
// 3 bubbled
// 2 bubbled
// 1 bubbled
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}

// the takeaway: the target node is the last to capture the event,
// while it is the first node to bubble the event up

// stop propagation
const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}