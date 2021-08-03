
 function about(){
     let innerdata=document.querySelector('#innerdata');
     innerdata.innerHTML='';
     let about=document.createElement('p');
     about.classList.add('about');
     about.innerText=`"Scientists have proven beyond a shadow of a doubt that there is life after death -- though they say it's virtually impossible to get decent Chinese food."`;
     console.log('inabout');
     let about2=document.createElement('p');
     about2.classList.add('about');
     about2.classList.add('about2');
     about2.innerText=`So don't get ya hopes high, Just order our not-so-delicious food if you're starving`; 
     innerdata.appendChild(about);
     innerdata.appendChild(about2);
 }
 console.log('outabout');
 export {about};