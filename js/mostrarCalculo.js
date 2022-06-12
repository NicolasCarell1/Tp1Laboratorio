app.component('mostrar-calculo', {
    props: {
        nombre: {
            required: true,
        },
        apellido: {
            required: true,
        },
        monto: {
            //type: Float,
            required: true
        },
        cantDias: {
            required: true,
        },
        reinversion: {
            required: false,
        }

    },
    data() {
        return {
            intereses: 0,
            montoFinal: 0,
            inputDias: 0,
            inputMonto: 0,
            reinversion: 'No'
        }
    },
    template:
    /*html*/
        `<h4>Sr/a {{nombre}} {{apellido}}</h4>
        <br>
        <label><strong>Capital invertido:</strong> {{monto}}</label>
        <br>
        <label><strong>Cantidad de dias:</strong> {{cantDias}}</label>
        <br>
        <label><strong>Interes:</strong> {{interes}}</label>
        <br>
        <label><strong>Monto Final:</strong> {{montoFinal}}</label>`,

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
        calcularMonto(monto, cantDias) {

            //let interes = NaN;
            //let montoFinal = 0;
            if (!(cantDias > 60)) this.interes = 40;
            else if (!(cantDias > 120)) this.interes = 45;
            else if (!(cantDias > 360)) this.interes = 50;
            else this.interes = 55;

            this.montoFinal = (parseInt(monto) * ((cantDias / 360) * (this.interes / 100))) + parseInt(monto);

        },
        computed: {
            reinv(reinversion) {
                return this.reinversion;
            }
        }

    }


})