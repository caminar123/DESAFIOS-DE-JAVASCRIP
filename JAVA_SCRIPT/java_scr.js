/*
let numerosecrpeto=6;
 let numeros=prompt("indica el numero");
 if (numerosecreto==numeros){
    alert("Acertaste el numero secreto");
 } else{
    alert("Fallaste, el numero secreto es ");
 }

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
 


//13
// formula para generar un numero aleatorio entre 1 y 10

//14
Let numeroMaximo=prompt("Ingresa un numero maximo");
let numeroSecreto=Math.floor( Math.random()*numeroMaximo+1);;
let numeroUsuario=0;
let intentos=1;
let nombre="vez";
while(numeroUsuario!=numeroSecreto){

    console.log(numeroSecreto);
    numeroUsuario=prompt("Ingresa un numero entre 1 y "+numeroMaximo);
    
    if (numeroSecreto==numeroUsuario){
        alert(`Acertaste el numero es:${numeroSecreto} lo realizaste en ${intentos} ${nombre}`);}
        else{
        
        if (numeroUsuario>numeroSecreto){
            alert("El numero es menor");
        }else{
            alert("El numero es mayor");
        }
        intentos=intentos+1;
        nombre="veces";
        if (intentos>3){
            alert("llegaste al numero maximo de intentos");
            break;
        }
        }
        
   
    
    
}}*/ 
//practica java script
//1.	Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
let n= prompt("ingresa tu nombre");
console.log("Bienvenido a, "+n+" a la práctica de JavaScript!");

//2.	Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre="Beymar Pierre";
console.log("¡Hola, "+nombre+"!");

//3.	Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, 
// almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguaje=prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("El lenguaje de programación que más me gusta es: "+lenguaje);

//4.	Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores 
// numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado 
// en una tercera variable llamada "resultado". Utiliza console.log para 
// mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1=5;
let valor2=10;
let resultado=valor1+valor2;
console.log("La suma de "+valor1+" y "+valor2+" es igual a "+resultado);  

//5.	5.	Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
// Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
// Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor3=15;
let valor4=8;
let resultado1=valor3-valor4;
console.log("La diferencia entre "+valor3+" y "+valor4+" es igual a "+resultado1);


//6.	Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar 
// si la persona es mayor o menorde edad y muestra un mensaje apropiado en la consola.
let edad=prompt("Ingresa tu edad");
if (edad>=18){
      console.log("Eres mayor de edad");
}else{
      console.log("Eres menor de edad");
}

//7.  Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota
//  es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota=6;
if (nota>=7){
      console.log("Aprobado");
}else{
      console.log("Reprobado");
}


//8.	Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio=Math.random();
console.log("El numero aleatorio es: "+numeroAleatorio);


//9.	Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroEntero=Math.floor(Math.random()*10+1);
console.log("El numero entero entre 1 y 10 es: "+numeroEntero);


//10.	Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroEntero1=Math.floor(Math.random()*1000+1);
console.log("El numero entero entre 1 y 1000 es: "+numeroEntero1);  