app.component('mostrar-calculo-Reinvertido', {
    data: {
        inicialSegPeriodo: 0,
        finalSegPeriodo: 0,
        inicialTercerPeriodo: 0,
        finalTercerPeriodo: 0,
        inicialCuartoPeriodo: 0,
        finalCuartoPeriodo: 0,
        montoFinal: 0,
        intereses: 0,
        monto: 0,
    },
    template:
    /*html*/
        `<table class="table">
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
    </table>`,

    methods: {
        calcularMontoReinvertido(monto, cantDias) {

            //let interes = NaN;
            //let montoFinal = 0;
            if (!(cantDias > 60)) this.interes = 40;
            else if (!(cantDias > 120)) this.interes = 45;
            else if (!(cantDias > 360)) this.interes = 50;
            else this.interes = 55;

            this.montoFinal = (parseInt(monto) * ((cantDias / 360) * (interes / 100))) + parseInt(monto);

            this.inicialSegPeriodo = montoFinal;
            this.finalSegPeriodo = (parseInt(montoFinal) * ((cantDias / 360) * (interes / 100))) + parseInt(montoFinal);
            this.inicialTercerPeriodo = finalSegPeriodo;
            this.finalTercerPeriodo = (parseInt(finalSegPeriodo) * ((cantDias / 360) * (interes / 100))) + parseInt(finalSegPeriodo);
            this.inicialCuartoPeriodo = finalTercerPeriodo;
            this.finalCuartoPeriodo = (parseInt(finalTercerPeriodo) * ((cantDias / 360) * (interes / 100))) + parseInt(finalTercerPeriodo);
        },


    }
})