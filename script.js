const heading = document.querySelector('h1');

heading.textContent = 'DOM Manipulation'

const list = document.querySelectorAll('ol > li');
list[3].textContent = 'charAt'; 
list[2].textContent = 'toUpperCase';
list[0].textContent = 'replace';
list[1].textContent = 'toLowerCase';

const listN = document.getElementsByClassName('method')

listN[0].textContent = 'split';
listN[1].textContent = 'indexOf';

const lastN = document.querySelector('li:nth-of-type(9)');

lastN.textContent = 'replaceAll';

const lists = document.getElementsByTagName('li');
lists[4].textContent = 'startsWith';
lists[5].textContent = 'includes';
lists[9].textContent = 'endsWith';

const title = document.getElementById('title');

title.innerHTML = 'All the <span style="color: blue; text-decoration: underline;">main string methods</span>';

document.body.style.backgroundColor = 'linear-gradient(to right, orange 43%, #F1c 45%)';


document.body.style.backgroundColor = `rgb(${parseInt(Math.random()**255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;

title.style.paddingBlock = '2rem';
title.style.border = '12px solid crimson';
