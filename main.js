//promedio trimestre
function promediofinal(){

    var n1= document.getElementById("nota1").value;
    var n2= document.getElementById("nota2").value;
    var n3= document.getElementById("nota3").value;
    var prome = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    document.getElementById("promx").innerHTML = prome ;
 
    if(prome > 6){
       
        alert("TRIMESTRE APROBADO");
        
    }else{

     alert("TRIMESTRE DESAPROBADO");
     
       
    }

}

