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
            reinversion: 'No'
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

    methods: {
        verificarDatos() {
            let correct = true;
            if (inputDias.value < 30) {
                correct = false;
            }
            if (inputMonto.value < 1000) {
                correct = false;
            }
            if (correct) {
                if (reinversion.value === 'no') {
                    calcularMonto(inputMonto.value, inputDias.value)
                } else {
                    calcularMonto(inputMonto.value, inputDias.value),
                        calcularMontoReinvertido(inputMonto.value, inputDias.value)
                }
            }
        },

        computed: {
            reinv(reinversion) {
                return this.reinversion;
            }
        }

    }


})