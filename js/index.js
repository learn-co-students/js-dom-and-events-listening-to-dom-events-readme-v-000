// using this file is optional
// you can also load the code snippets in using your browser's console
//Demonstrate Listening to Events on a DOM Node with addEventListener()
const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

//Demonstrate Triggering Events Listeners on DOM Nodes
const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  console.log(e.which);
});

//Demonstrate Preventing the Default Behavior for DOM Nodes
const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});

//Explain the Difference Between Bubbling and Capturing Events
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

// click on the div containing "5". You should see

// 5 bubbled
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

// Now click on div 5. You should see

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

//Demonstrate Stopping Propagated Behaviors with stopPropagation()
const divs = document.querySelectorAll('div');
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

//Now try clicking on any node — you should only see one log statement!