//3
let i2= prompt("indica un numero");
let doble=i2*2;
alert("El doble de "+i2+" es "+doble);



//4
let num1=prompt("indica el primer numero");
let num2=prompt("indica el segundo numero");
let num3=prompt("indica el tercer numero"); 

let resultado=(parseInt(num1)+parseInt(num2)+parseInt(num3))/3;
alert("El promedio de "+num1+", "+num2+" y "+num3+" es "+resultado);


//5
let a1=prompt("indica el primer numero");
let a2=prompt("indica el segundo numero");
let mayorresultado=(parseInt(a1)>parseInt(a2))?a1:a2;
alert("El mayor entre "+a1+" y "+a2+" es "+mayorresultado);

//6
let i1=prompt("indica el numero");
let cuadradoresultado=parseInt(i1)*parseInt(i1);
alert("El cuadrado de "+i1+" es "+cuadradoresultado);   


//7
let semana="domingo";
let ingresa=prompt("ingresa un dia de la semana");
if (semana==ingresa ){
      alert("Buen finde de semana ");
}  
else{
      alert("Buena semana ");
}

//8
let num11=prompt("ingresa un numero");
if (num11>0){
      alert("El numero es positivo");

}else if (num11<0){
      alert("El numero es negativo");
}

//9
let puntaje=prompt("ingresa tu puntaje");
if (puntaje>=100 ){
      alert("Felicidades, has ganado");}
else{
      alert("intenta nuevamente para ganar");
}

//10
let numero=0;
 while (numero < 10) {
      if (numero%2==0){
            alert("Los numeros pares son :"+numero);
      }
      numero++;
 }

 //11
let numerosecreto = 6;
let numerousuario = 0;
let intentos = 0;
const maxIntentos = 3;

while (numerousuario !== numerosecreto && intentos < maxIntentos) {
   
    numerousuario = parseInt(prompt("Indica el número (Intento " + (intentos + 1) + " de " + maxIntentos + "):"));

    if (numerousuario === numerosecreto) {
        alert(" ¡Acertaste! El número secreto es " + numerosecreto + " en " + (intentos + 1) + " intento(s).");
        break; 
    } else {
        if (numerousuario > numerosecreto) {
            alert(" El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }
    }

    intentos++;

    if (intentos === maxIntentos) {
        alert(" Perdiste. El número secreto era " + numerosecreto + ". Intentos usados: " + intentos);
    }
}
//12
let contador = 10;

while (contador >= 0) {
    if (contador === 0) {
        alert("Llegamos a 0");
    } else {
        alert(contador);
    }
    contador--; 
}