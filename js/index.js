// using this file is optional
// you can also load the code snippets in using your browser's console

const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document/querySelector('input');


input.addEventListener('keydown', function(e){
  if (e.which === 71){
    console.log('default prevented');
    return e.preventedDefault()
  } else {
    console.log('Not a "g"');
  }
});

//bubbling Event
let divs = document.querySelectorAll('div');

function bubble(e) {
  console.log(this.firstChild.nodeVaule.trim() + 'bubbled');
}

for (let i=0; i< divs.length; i++) {
  div[i].addEventListener('click', bubble);
  }

  //Capturing Event:
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + 'captured');
}

for (let i=0; divs.length; i++) {
  // set the third argument to 'true'
  divs[i].addEventListener('click', capture, true);
}

// Stop Propagation
const divs = document.querySelectorAll('div');

function bubble(e) {
  e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + 'bubbled');
}
for (let i=0; i < divs.length; i++) {
  div[i].addEventListener('click', bubble);
}
