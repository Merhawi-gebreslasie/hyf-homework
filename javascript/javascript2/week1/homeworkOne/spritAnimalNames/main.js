const form = document.querySelector('#myform');
const nameInput = document.getElementById('myinput');
const button = document.getElementById('mybutton');
var arr = ['A dog', 'A cat', 'A butterfly', 'A horse', 'A monkey', 'A lion', 'A turtle', 'A panther', 'A pigeon', 'A dolphin'];
var randomIndex = Math.floor(Math.random() * 10) + 1;
var spritName = arr[randomIndex];
var mySelect = document.getElementById('myselect');
var h2 = document.querySelector('h2');


button.addEventListener('click', function (event) {
    event.preventDefault();
    let value = nameInput.value;
    let option = mySelect.options[mySelect.selectedIndex].text;

    if (option === 'buttonClicked' && nameInput.value !== '') {
        h2.innerHTML = value + '-' + spritName;
    }
    else{
        h2.innerHTML='select the correct option and enter your name';
    }
});
nameInput.addEventListener('mousemove', function (event) {
    event.preventDefault();
    let value = nameInput.value;
    let option = mySelect.options[mySelect.selectedIndex].text;

    if (option === 'inputHovered' && nameInput.value !== '') {
        h2.innerHTML = value + '-' + spritName;
    }
    else{
        h2.innerHTML='select the correct option and enter your name';
    }
});

nameInput.addEventListener('input', function (event) {
    event.preventDefault()
    let value = nameInput.value;
    let option = mySelect.options[mySelect.selectedIndex].text;
    if (option === 'textWritten' && nameInput.value !== '') {
        h2.innerHTML = value + '-' + spritName;
    }
    else{
        h2.innerHTML='select the correct option and enter your name';
    }});



