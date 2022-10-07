//Declaracion de Variables
const display = document.getElementById("display")
const tabla = document.getElementById("historial")
let n = ""
let num = [0, 0]
let operacion = ""
let resul = 0
//Funcionalidad botones Números
const cero = () => {
    display.innerHTML += 0
    n += "0"
}
const uno = () => {
    display.innerHTML += 1
    n += "1"
}
const dos = () => {
    display.innerHTML += 2
    n += "2"
}
const tres = () => {
    display.innerHTML += 3
    n += "3"
}
const cuatro = () => {
    display.innerHTML += 4
    n += "4"
}
const cinco = () => {
    display.innerHTML += 5
    n += "5"
}
const seis = () => {
    display.innerHTML += 6
    n += "6"
}
const siete = () => {
    display.innerHTML += 7
    n += "7"
}
const ocho = () => {
    display.innerHTML += 8
    n += "8"
}
const nueve = () => {
    display.innerHTML += 9
    n += "9"
}
//Funcion punto
const punto = () => {
    if (n.includes(".")) {
        alert("no puede colocar más de un punto en un número")
    } else {
        display.innerHTML += "."
        n += "."
    }
}
//Funcion borrar
const borrar = () => {
    if (n == "") {
    } else {
        n = n.substring(0, n.length - 1)
        display.innerHTML = n
    }
}//Funcion All Clear
const ac = () => {
    display.innerHTML = ""
    n = ""
    operacion = ""
}
//Funciones Operaciones
const sum = () => {
    if (n == "") {
        alert("debe ingresar un número")
        return
    } else {
        num[0] = parseFloat(n)
        operacion = "+"
        display.innerHTML = ""
        n = ""
    }
}
const res = () => {
    if (n == "") {
        display.innerHTML = "-"
        n = "-"
    } else {
        num[0] = parseFloat(n)
        operacion = "-"
        display.innerHTML = ""
        n = ""
    }
}
const mul = () => {
    if (n == "") {
        alert("debe ingresar un número")
        return
    } else {
        num[0] = parseFloat(n)
        operacion = "x"
        display.innerHTML = ""
        n = ""
    }
}
const div = () => {
    if (n == "") {
        alert("debe ingresar un número")
        return
    } else {
        num[0] = parseFloat(n)
        operacion = "/"
        display.innerHTML = ""
        n = ""
    }
}
const igual = () => {
    if (n == "" || operacion == "") {
        alert("debe ingresar un número u operador")
        return
    } else {
        num[1] = parseFloat(n)
        if (operacion == "+") {
            resul = num[0] + num[1]
        } else {
            if (operacion == "-") {
                resul = num[0] - num[1]
            } else {
                if (operacion == "x") {
                    resul = num[0] * num[1]
                } else {
                    if (operacion == "/") {
                        resul = num[0] / num[1]
                    }
                }
            }
        }
        tabla.innerHTML += "<tr><td>" + num[0] + " " + operacion + " " + num[1] + " = " + resul + "</td></tr>"
        n = resul.toString()
        display.innerHTML = resul
        operacion = ""
    }
}
//Funcion Limpiar historial
const limpiar = () => {
    tabla.innerHTML = ""
}