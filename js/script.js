let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

 



function search_products() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('box')
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
  }



// When the user clicks on <div>, open the popup
function myPopupting() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


function myPopupting1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}


function myPopupting2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}


function myPopupting3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}


function myPopupting4() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
}


function myPopupting5() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show");
}


