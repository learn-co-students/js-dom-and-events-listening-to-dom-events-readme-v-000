// using this file is optional
// you can also load the code snippets in using your browser's console
const page = document;
const main = document.getElementById('main');
const input = document.querySelector('input');

let divs = document.querySelectorAll('div');
let keyPressed = "";

page.addEventListener ('keydown', function (e) {
    if (e.key === 13) {
      console.log('enter key ignored');
      return e.preventDefault();
    } else {
      keyPressed += e.key;
      console.log(keyPressed);
    }
  }
);

main.addEventListener ('click', function (event) {
  alert('I was clicked!');
});

input.addEventListener ('keydown', function (e) {
  if (e.key === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a g');
  }
});

function bubble (e) {
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
