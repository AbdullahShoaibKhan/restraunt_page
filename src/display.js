
function display(){ 
console.log('displaystart');
const content=document.querySelector('#content');
content.innerHTML= '' ;
let header=document.createElement('header');
header.innerText='Chin Chin Restraunt';

let nav=document.createElement('nav');
nav.classList.add('tabs');

let aboutbtn=document.createElement('button');
aboutbtn.setAttribute('id','about');
aboutbtn.classList.add('btn');
aboutbtn.innerText="About";

let menubtn=document.createElement('button');
menubtn.setAttribute('id','menu');
menubtn.classList.add('btn');
menubtn.innerText="Menu";

let contactbtn=document.createElement('button');
contactbtn.setAttribute('id','contact');
contactbtn.classList.add('btn');
contactbtn.innerText="Contact";

nav.appendChild(aboutbtn);
nav.appendChild(menubtn);
nav.appendChild(contactbtn);
header.appendChild(nav);
content.appendChild(header);

console.log('indis');

let innerdata=document.createElement('div');
innerdata.setAttribute('id','innerdata');
content.appendChild(innerdata);

let footer=document.createElement('footer');
footer.innerText='Abdullah Shoaib';
content.appendChild(footer);
};
console.log('outdis');
export {display};