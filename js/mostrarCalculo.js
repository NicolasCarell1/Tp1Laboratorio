app.component('mostrar-calculo', {
    props: {
        datos: {
            type: Array,
            required: true
        }

    },
    data() {
        return {
            interes: 0,
            montoFinal: 0,
            inputDias: 0,
            inputMonto: 0,

        }
    },
    template:
    /*html*/
        `
        <div @onchange="calcularMonto" v-for="(dato, index) in datos" :key="index">
        <h4>Sr/a {{dato.nombre}} {{dato.apellido}}</h4>
        <br>
        <label><strong>Capital invertido:</strong> {{dato.monto}}</label>
        <br>
        <label><strong>Cantidad de dias:</strong> {{dato.dias}}</label>
        <br>
        <label><strong>Interes:</strong> {{dato.interes}}</label>
        <br>
        <label><strong>Monto Final:</strong> {{dato.montoFinal.toFixed(2)}}</label>
        </div>`,


})