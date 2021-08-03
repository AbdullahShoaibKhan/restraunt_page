import {display} from'./display';
import {about} from './about';
import {loadmenu0} from './menu';
import {contact} from './contact';

function run(){
    console.log('inrun');
    display();    
    about();
    let aboutbtn=document.querySelector('#about');
    let menubtn=document.querySelector('#menu');
    let contactbtn=document.querySelector('#contact');
    console.log('afterdisplay');
    menubtn.addEventListener('click',loadmenu0);
    aboutbtn.addEventListener('click',about);    
    contactbtn.addEventListener('click',contact);
}
run();

