var cadena = "";
var calcular = false;
var resultado = "";
document.addEventListener('DOMContentLoaded', ready, false);

function ready() {
    var controls = document.querySelectorAll('input');
    for (var i = 0; i < controls.length; i++) {
        controls[i].addEventListener('click', ejecutar, false);
    }

    function ejecutar() {
        valor = this.value;
        procesar(valor);
        if (calcular === true) {
            calcular_resultado();
            imprimir(resultado);
            cadena = resultado;
        } else {
            imprimir(cadena);
        }
    }

    function procesar(valor) {
        if (valor === "" || valor === false || valor === undefined || valor === null) {
            console.log("ha ocurrido un error, valor es null");
        } else if (valor.toLowerCase() === "del") {
            cadena = "";
        } else if (valor === "=") {
            calcular = true;
        } else if (valor === "x" || valor === "X") {
            valor = "*";
            cadena = cadena.toString() + valor;
        } else {
            cadena = cadena.toString() + valor;
        }
    }

    function calcular_resultado() {
        resultado = eval(cadena);
    }

    function imprimir(e) {
        document.getElementById('pantalla').innerHTML = e;
        calcular = false;
    }
}
