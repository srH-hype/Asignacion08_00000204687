/* 
Heriberto Imperial Badillo 00000204687
Archivo javascript que ejecuta las operaciones que realiza la calculadora
 */

/* Variable que controla que operacion se realizara */
var ope = 0;

/* Revisa cual opcion fue seleccionada, ejecuta la operacion correspondiente y 
 muestra el resultado en la aplicacion */
function resul() {
    var resultado;
    switch (ope){
        case 0:
            resultado = 0;
            break;
        case 1:
        var x = parseInt(document.getElementById('valor1').value);
        var y = parseInt(document.getElementById('valor2').value);
        resultado = x+y;
            break;
        case 2:
        var x = parseInt(document.getElementById('valor1').value);
        var y = parseInt(document.getElementById('valor2').value);
        resultado = x-y;
            break;
        case 3:
        var x = parseInt(document.getElementById('valor1').value);
        var y = parseInt(document.getElementById('valor2').value);
        resultado = x*y;
        break;
        case 4:
        var x = parseInt(document.getElementById('valor1').value);
        var y = parseInt(document.getElementById('valor2').value);
        resultado = x/y;
        break;
    }
    document.getElementById('resultado').value = resultado;
}

/* Define que se sumara */
function suma() {
    alert("Suma");
    ope = 1;
}

/* Dedine que se sumara */
function resta() {
    alert("Resta");
    ope = 2;
}

/* Define que se multiplicara*/
function multiplicar() {
    alert("Multiplicar");
    ope = 3;
}

/* Defina que se dividira */
function dividir() {
    alert("Divivdir");
    ope = 4;
}