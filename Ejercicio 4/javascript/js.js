//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0
let numeroIngresado = prompt("Ingrese un numero")

do{

    if (numeroIngresado === null){
        break
    } 

    

    let convertirNumero = parseInt(numeroIngresado)

    if (isNaN(convertirNumero)){
        alert("Numero invalido")
    } else {
        suma = suma + convertirNumero
    }

    numeroIngresado = prompt("Ingrese un numero")
    
} while(true)

alert(`La sumatoria de todos los numeros que ingresaste es: ${suma}`)