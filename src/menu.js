console.log('outmenu');
function loadmenu0(){
    let innerdata = document.querySelector('#innerdata');
    innerdata.innerHTML = '';
    console.log('inmenu');
    let items = [
    loadmenu(
        'Black Pepper', '$200', 'Fried Egg Rice whith shashlik', './img/black-pepper.jpg'
    )
    ,
    loadmenu(
        'Drum Stick', '$80', 'Fried leg piece','./img/drumstick.jpg'
    )
    ,
    loadmenu(
        'Chowmin', '$200', 'Chicken + vegetable with sauce','./img/chowmin.jpg'
    )
    ,
    loadmenu(
        'Soup', '$250', 'Chicken + vegetable soup','./img/soup.jpg'
    )
];

function loadmenu(name, price, recipe, src) {
    
    console.log(innerdata);
    console.log('item');
    let item0 = document.createElement('div');
    item0.classList.add('menu-panel');

    
    let item1 = document.createElement('p');
    item1.innerText =  name ;

    let item2 = document.createElement('p');
    item2.innerText = price;

    let item3 = document.createElement('p');
    item3.innerText = recipe;

    let item4 = document.createElement('img');
    item4.src = src;

    item0.appendChild(item1);

    item0.appendChild(item2);

    item0.appendChild(item3);

    item0.appendChild(item4);
    console.log('afteritems');

    innerdata.appendChild(item0);
    console.log(item0);
    console.log('afteritem');
}
}
export {loadmenu0};