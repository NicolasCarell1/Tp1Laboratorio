    var inputCantDias = document.getElementById('inputDias');
    inputCantDias.addEventListener('change', function() {
         if (this.value < 30)
         document.getElementById('labelDias').style.display='block';
         else
         document.getElementById('labelDias').style.display='none';
      
     })
   
    var inputMonto = document.getElementById('inputMonto');
     inputMonto.addEventListener('blur', function() {
         if (this.value < 1000)       
         document.getElementById('labelMonto').style.display='block';
         else
         document.getElementById('labelMonto').style.display='none';      
     })
        
    document.getElementById("btnCalcular").addEventListener("click",()=>{        
        if (document.getElementById("reinversion").value != "si")
        calcularMonto(inputMonto.value,inputCantDias.value)
        else
        calcularMontoReinvertido(inputMonto.value,inputCantDias.value)        
    })
    
    function calcularMonto(monto, cantDias){    

    let interes = NaN;
    let montoFinal = 0;
        if (!(cantDias > 60)) interes = 40;
        else if (!(cantDias > 120)) interes = 45;
        else if (!(cantDias > 360))interes = 50;
        else interes = 55;

    montoFinal = (parseInt(monto) * ((cantDias/360) * (interes/100))) + parseInt(monto);
    
    document.getElementById('resultadoReinversion').style.display= 'none';

    const app = document.querySelector('#resultado');
    app.innerHTML= `<h4>Sr/a ${document.getElementById("inputNombre").value}  ${document.getElementById("inputApellido").value}</h4>
    <br>
    <label><strong>Capital invertido:</strong> $${monto}</label>
    <br>
    <label><strong>Cantidad de dias:</strong> ${cantDias}</label>
    <br>
    <label><strong>Interes:</strong> ${interes}</label>
    <br>
    <label><strong>Monto Final:</strong> $${montoFinal.toFixed(2)}</label>`;    
    }

    function calcularMontoReinvertido(monto, cantDias){

    let interes = NaN;
    let montoFinal = 0;
        if (!(cantDias > 60)) interes = 40;
        else if (!(cantDias > 120)) interes = 45;
        else if (!(cantDias > 360))interes = 50;
        else interes = 55;

    montoFinal = (parseInt(monto) * ((cantDias/360) * (interes/100))) + parseInt(monto);
       
    document.getElementById('resultadoReinversion').style.display= 'block';
    
    const app = document.querySelector('#resultadoReinversion');

    inicialSegPeriodo = montoFinal;
    finalSegPeriodo = (parseInt(montoFinal) * ((cantDias/360) * (interes/100))) + parseInt(montoFinal);
    inicialTercerPeriodo = finalSegPeriodo;
    finalTercerPeriodo = (parseInt(finalSegPeriodo) * ((cantDias/360) * (interes/100))) + parseInt(finalSegPeriodo);
    inicialCuartoPeriodo = finalTercerPeriodo;
    finalCuartoPeriodo = (parseInt(finalTercerPeriodo) * ((cantDias/360) * (interes/100))) + parseInt(finalTercerPeriodo);
    
    app.innerHTML= `
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Periodo</th>
            <th scope="col">Monto Inicial</th>
            <th scope="col">Monto Final</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>$${monto}</td>
            <td>$${montoFinal.toFixed(2)}</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>${inicialSegPeriodo.toFixed(2)}</td>
            <td>${finalSegPeriodo.toFixed(2)}</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>${inicialTercerPeriodo.toFixed(2)}</td>
            <td>${finalTercerPeriodo.toFixed(2)}</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>${inicialCuartoPeriodo.toFixed(2)}</td>
            <td>${finalCuartoPeriodo.toFixed(2)}</td>
        </tr>
        </tbody>
    </table>`;
    }
                   