function contact(){
console.log('incontact');
    let innerdata=document.querySelector('#innerdata');
    innerdata.innerHTML='';
    let contact=document.createElement('p');
    contact.classList.add('contact');
    contact.innerText=`I guess you really are starving are starving,here's my number "000-111-222-43" I'll make an exception for ya`;
    
    let map=document.createElement('iframe');
    map.classList.add('map');
    map.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.611208670994!2d74.35184111392219!3d31.507368854938974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919044de9441f25%3A0x6f4736cfd417d1bc!2sXinhua%20Mall!5e0!3m2!1sen!2s!4v1627894615857!5m2!1sen!2s');
    
    innerdata.appendChild(contact);
    innerdata.appendChild(map);
}
console.log('outcontact');
export {contact}; 