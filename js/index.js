function valores() {
    var texto = document.getElementById("inputNombre").value;
    var texto1 = document.getElementById("inputApellido").value;
    var numero1 = document.getElementById("inputMonto").value;
    var numero2 = document.getElementById("inputDias").value;

    console.log(texto);
    console.log(texto1);
    console.log(numero1);
    console.log(numero2);
}

var input = document.getElementById('numero');
input.addEventListener('input', function() {
    if (this.value.length > 30)
        this.value = this.value.slice(30, 360);
})
var input = document.getElementById('monto');
input.addEventListener('input', function() {
    if (this.value.length > 30)
        this.value = this.value.slice(0, 30);
})


function agregarBoton(htmlID, texto, funcion) {
    var o = document.getElementById(htmlID);
    o.html += '<input type="button" value="' + texto + '" onclick="' + funcion + '">';
}