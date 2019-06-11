const main = document.getElementById('main');
main.addEventListener('click', function(event) {
  alert('I was clicked!')
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(event) {
  if (event.which === 71) {
    console.log('default prevented');
    return event.preventDefault();
  } else {
    console.log('not a "g"');
  }
});

//bubbling

let divs = document.querySelectorAll('div');

function bubble(event) {
  event.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
};

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
};

function capture(event) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
};

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
};
