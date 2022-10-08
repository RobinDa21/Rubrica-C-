//Declaracion de Variables
const display = document.getElementById("display")
const tabla = document.getElementById("historial")
let n = ""
let num = [0, 0]
let oper = ""
let resul = 0
//Funcionalidad botones Números
const cero = () => {
    mostrar(0)
}
const uno = () => {
    mostrar(1)
}
const dos = () => {
    mostrar(2)
}
const tres = () => {
    mostrar(3)
}
const cuatro = () => {
    mostrar(4)
}
const cinco = () => {
    mostrar(5)
}
const seis = () => {
    mostrar(6)
}
const siete = () => {
    mostrar(7)
}
const ocho = () => {
    mostrar(8)
}
const nueve = () => {
    mostrar(9)
}
//Funcion punto
const punto = () => {
    if (n.includes(".")) {
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
    oper = ""
}
//Funciones Operaciones
const sum = () => {
    if (n == "") {
        return
    } else {
        operacion("+")
    }
}
const res = () => {
    if (n == "") {
        display.innerHTML = "-"
        n = "-"
    } else {
        operacion("-")
    }
}
const mul = () => {
    if (n == "") {
        return
    } else {
        operacion("x")
    }
}
const div = () => {
    if (n == "") {
        return
    } else {
        operacion("/")
    }
}
const igual = () => {
    if (n == "" || oper == "") {
        return
    } else {
        resultado(oper);
        n = resul.toString()
        display.innerHTML = resul
        oper = ""
        num = [0, 0]
    }
}
//Funcion Limpiar historial
const limpiar = () => {
    tabla.innerHTML = ""
}
//Funcion resultado
function resultado(operador) {
    num[1] = parseFloat(n)
    switch (operador) {
        case "+":
            resul = num[0] + num[1]
            break;
        case "-":
            resul = num[0] - num[1]
            break;
        case "x":
            resul = num[0] * num[1]
            break;
        case "/":
            resul = num[0] / num[1]
            break;
    }
    tabla.innerHTML += "<tr><td>" + num[0] + " " + oper + " " + num[1] + " = " + resul + "</td></tr>"
}
//Funcion operacion
function operacion(operador) {
    if (oper != "") {
        resultado(oper)
        n = ""
        num[0] = resul
        oper = operador
        display.innerHTML = ""
    } else {
        num[0] = parseFloat(n)
        oper = operador
        display.innerHTML = ""
        n = ""
    }
}
//Funcion Mostrar
function mostrar(num) {
    display.innerHTML += num
    n += num.toString()
}