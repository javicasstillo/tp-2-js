//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let concatenar = ""

do{

    let frase = prompt("Ingrese cualquier frase")

    if (frase === null) {
        alert("No ingresaste ninguna frase.")
        break; 
    }

    if (!isNaN(frase)){
        alert("ingresaste un numero")
        continue
    }

    

    let confirmacion = confirm("¿Quiere ingresar otra frase?")

    if (confirmacion === true){

        concatenar = concatenar  + frase + "-"
        frase = prompt("Ingrese nuevamente una frase")
    } else{
        break
    }

} while(true)

alert(`A continuacion le muestro las frases que usted escribio: ${concatenar}`)