let newNode = document.createElement("div")
    let parentDiv = document.getElementById("resultado").parentNode
    newNode.setAttribute("id","valor-anterior")
    newNode.setAttribute("class","result")
    let sp2 = document.getElementById("resultado")
    parentDiv.insertBefore(newNode, sp2)
    
    let mas = document.getElementById("mas");
    let menos = document.getElementById("menos");
    let por = document.getElementById("por");
    let igual = document.getElementById("igual");
    let divi = document.getElementById("divi");
    let borrarTodo = document.getElementById("borrartodo");
    let borrar = document.getElementById("borrar");
    let modulo = document.getElementById("modulo");
    modulo.setAttribute("value","modulo");
    mas.setAttribute("value","sumar");
    menos.setAttribute("value","restar");
    por.setAttribute("value","multiplicar");
    igual.setAttribute("value","igual");
    divi.setAttribute("value","dividir");
    igual.setAttribute("class","operador");
    borrarTodo.setAttribute("onclick","display.borrar()");
    borrar.setAttribute("onclick","display.borrarTodo()");
    
   
   
    
   
class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }
    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
    modulo(num1,num2){
        return num1 % num2;
    }
}

class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
            modulo : "%",
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion = tipo !== 'igual' ? tipo : this.calcular();
        console.log(this.tipoOperacion);
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        console.log(this.tipoOperacion);
        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
         this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('resultado');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});




botonesOperadores.forEach(boton => {
    let value = boton.attributes.value.nodeValue;
    boton.addEventListener('click', () => display.computar(value))
});


  
