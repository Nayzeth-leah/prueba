function suma(){
    let numero1, numero2, suma;
    numero1 = Math.floor(Math.random()*10);
    numero2 = Math.floor(Math.random()*10);
    suma = numero1 + numero2;
    if (isNaN(numero1) || isNaN(numero2)){
    } else{
        suma = numero1 + numero2 
        alert(  "El resultado es " + suma);
    }

    document.getElementById("numero1").innerHTML = numero1;
    document.getElementById("numero2") . innerHTML = numero2;



}   




