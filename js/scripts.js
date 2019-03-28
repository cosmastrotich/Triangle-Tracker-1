 function SUBMIT(){
    var side1=parseFloat(document.getElementById("side1").value);
    var side2=parseFloat(document.getElementById("side2").value);
    var side3=parseFloat(document.getElementById("side3").value);
    
    if(side1===side2 && side2===side3 && side1===side3){
        alert ("Equilateral Triangle");
    }
    else if(side1===side2||side2===side3||side1===side3){
        alert ("Isoseles Triangle");
    }
    else if(side1!=side2 && side2!=side3 && side1!=side3){
        alert ("Scalene Triangle");
    }
    else{
        alert("Not a triangle"); 
    }
    
}
function Refresh() {
    location.reload();
}
