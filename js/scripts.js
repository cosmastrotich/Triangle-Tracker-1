 function SUBMIT(){
    var side1=parseFloat(document.getElementById("side1").value);
    var side2=parseFloat(document.getElementById("side2").value);
    var side3=parseFloat(document.getElementById("side3").value);
  

    if(isNaN(side1,side2,side2)===true){
        output.innerHTML=("Null")
    }
    else if (side1===side2 && side2===side3 && side1===side3){
        output.innerHTML=("Equilateral Triangle");
    }
    else if(side1===side2||side2===side3||side1===side3){
        output.innerHTML=("Isoseles Triangle");
    }
    else if(side1!=side2 && side2!=side3 && side1!=side3){
        output.innerHTML=("Scalene Triangle");
    }
    else{
        output.innerHTML=("Not a triangle"); 
    }
    
}
function Refresh() {
    location.reload();
}