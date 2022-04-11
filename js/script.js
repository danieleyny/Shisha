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

function myPopupting6() {
    var popup = document.getElementById("myPopup6");
    popup.classList.toggle("show");
}

function myPopupting7() {
    var popup = document.getElementById("myPopup7");
    popup.classList.toggle("show");
}

function myPopupting8() {
    var popup = document.getElementById("myPopup8");
    popup.classList.toggle("show");
}

function myPopupting9() {
    var popup = document.getElementById("myPopup9");
    popup.classList.toggle("show");
}

function myPopupting10() {
    var popup = document.getElementById("myPopup10");
    popup.classList.toggle("show");
}

function myPopupting11() {
    var popup = document.getElementById("myPopup11");
    popup.classList.toggle("show");
}












// Drop Down Menu
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const dropdowns = Array.from(document.getElementsByClassName("dropdown-content"));
const elements = [
 document.getElementById("myDropdown"),
 document.getElementById("myDropdown1"),
 document.getElementById("myDropdown2"),
 document.getElementById("myDropdown3"),
 document.getElementById("myDropdown4"),
 document.getElementById("myDropdown5"),
 document.getElementById("myDropdown6"),
 document.getElementById("myDropdown7"),
 document.getElementById("myDropdown8"),
 document.getElementById("myDropdown9"),
 document.getElementById("myDropdown10"),
 document.getElementById("myDropdown11"),
 document.getElementById("myDropdown12"),
]

function DropDownMenu(){ elements[0].classList.toggle("show")} 
function DropDownMenu1(){ elements[1].classList.toggle("show")} 
function DropDownMenu2(){ elements[2].classList.toggle("show")} 
function DropDownMenu3(){ elements[3].classList.toggle("show")} 
function DropDownMenu4(){ elements[4].classList.toggle("show")} 
function DropDownMenu5(){ elements[5].classList.toggle("show")} 
function DropDownMenu6(){ elements[6].classList.toggle("show")} 
function DropDownMenu7(){ elements[7].classList.toggle("show")} 
function DropDownMenu8(){ elements[8].classList.toggle("show")} 
function DropDownMenu9(){ elements[9].classList.toggle("show")} 
function DropDownMenu10(){ elements[10].classList.toggle("show")} 
function DropDownMenu11(){ elements[11].classList.toggle("show")} 
function DropDownMenu12(){ elements[12].classList.toggle("show")} 

// Close the dropdown if the user clicks outside of it
window.onclick = (event) => {                 //  <--- JS ES6 arrow function
  if (!event.target.matches('.dropbtn')) {
    dropdowns.forEach((element) => {
        element.classList.remove('show')
      })
  }
}