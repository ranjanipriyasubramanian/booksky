//selecting popup box ,popup-overlay, button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("pop-up")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancel=document.getElementById("cancelbook")
//use instead event handlers such as onclick
cancel.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var add=document.getElementById("addbook")
//use instead event handlers such as onclick
add.addEventListener("click",function(event){
    event.preventDefault();
    
})

//select overall container addbutton,booktitle,bookauthor,bookdescription

var container= document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick='delet(event)'>Delete</button>` 
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//delete the book

function delet(event){
    event.target.parentElement.remove()
}








