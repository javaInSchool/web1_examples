var header = document.getElementById('h1');
var header2 = document.getElementById('h2');

header2.innerText = header.innerText;
header2.setAttribute('class','mainHeader');

function changeColor(){
    var textIn = document.querySelector(".in");
    var color = ""+textIn.value;
    header2.style.color = color;
}
var inSubmit = document.querySelector('.inSubmit');
inSubmit.addEventListener('click',changeColor);