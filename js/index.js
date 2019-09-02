function insertAfter(e,i){
        if(e.nextSibling){
            e.parentNode.insertBefore(i,e.nextSibling);
        } else {
            e.parentNode.appendChild(i);
        }
}


var currentDiv_copyright = document.getElementById("fecha_copyright");
//console.log(currentDiv_copyright);
  //current year
var current_date = new Date();
var current_year = current_date.getFullYear();

var newContent = document.createTextNode(current_year);

currentDiv_copyright.appendChild(newContent); //añade texto al div creado.


//insertAfter(currentDiv_copyright,newDiv);
