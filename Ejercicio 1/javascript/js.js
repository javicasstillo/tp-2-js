//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("¿Que edad tenes?"))

while (isNaN(edad)){
    alert("ingresa un numero valido")
    edad = parseInt(prompt("¿Que edad tenes?"))
}

if (edad >18){
    document.writeln("¡Felicidades! Ya puedes conducir")
} else{
    document.writeln(`Lo sentimos, debido a que aun tenes ${edad} años... no podes conducir.`)
}


