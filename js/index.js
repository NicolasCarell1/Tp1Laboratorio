app.component('index-agregados', {
    template:
    /*html*/
        ` <form class="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" @submit.prevent="onSubmit">

    <div class="u-form-group u-form-name">
        <label for="name-4c18" class="u-label">Nombre:</label>
        <input id="nombre" v-model="nombre" class="input u-border-2 u-border-palette-1-light-2 u-input u-input-rectangle u-palette-1-light-3 u-radius-10" type="text">
    </div>
    <div class="u-form-email u-form-group">
        <label for="email-4c18" class="u-label">Apellido:</label>
        <input id="apellido" v-model="apellido" class="input u-border-2 u-border-palette-1-light-2 u-input u-input-rectangle u-palette-1-light-3 u-radius-10" type="text">
    </div>
    <div class="u-form-group u-form-message">
        <label for="message-4c18" class="u-label">Monto a invertir:</label>
        <input id="monto" min="1000" v-model.number="monto" class="spin input u-border-2 u-border-palette-1-light-2 u-input u-input-rectangle u-palette-1-light-3 u-radius-10" type="number">
    </div>
    <div class="u-form-group u-form-message">
        <label for="message-4c18" class="u-label">Cantidad de dias:</label>
        <input id="dias" min="30" v-model.number="dias"  class="input u-border-2 u-border-palette-1-light-2 u-input u-input-rectangle u-palette-1-light-3 u-radius-10" type="number">
    </div>
    <div class="u-form-group u-form-message">
        <select  id="reinversion" v-model="reinversion">
            <option value="" disabled selected hidden>Desea reinvertir?</option>
            <option value="si">Si</option>
            <option value="no">No</option>
        </select>
    </div>
    <div class="u-align-right u-form-group u-form-submit">
    <button 
    value="Submit"
    type="submit"
        @click="calcularMonto()"
        @click="calcularMontoReinvertido()"
        id="btnCalcular" 
        class="u-active-palette-1-light-1 u-border-2 u-border-active-palette-1-light-1 u-border-hover-palette-1-light-1 u-border-palette-1-base u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-10 u-btn-1"
        >{{buttonName}}
    </button>
</div>
</form>
`,
    data() {
        return {
            nombre: '',
            apellido: '',
            monto: null,
            dias: null,
            reinversion: '',
            datos: [],
            buttonName: 'Calcular',
            montoFinal: null,
            interes: null,
            intereses: null,
            montoFinalreinversion: null,
            inicialSegPeriodo: 0,
            finalSegPeriodo: 0,
            inicialTercerPeriodo: 0,
            finalTercerPeriodo: 0,
            inicialCuartoPeriodo: 0,
            finalCuartoPeriodo: 0,

        }
    },

    methods: {
        onSubmit() {
            if (this.name === '' || this.apellido === '' || this.monto < 1000 || this.dias < 30 || this.reinversion === '') {
                alert('Faltan datos');
                return
            }
            let montoinversion = {
                nombre: this.nombre,
                apellido: this.apellido,
                monto: this.monto,
                dias: this.dias,
                reinversion: this.reinversion,
                interes: this.interes,
                montoFinal: this.montoFinal,
                montoFinalreinversion: this.montoFinalreinversion,
                inicialSegPeriodo: this.inicialSegPeriodo,
                finalSegPeriodo: this.finalSegPeriodo,
                inicialTercerPeriodo: this.inicialTercerPeriodo,
                finalTercerPeriodo: this.finalTercerPeriodo,
                inicialCuartoPeriodo: this.inicialCuartoPeriodo,
                finalCuartoPeriodo: this.finalCuartoPeriodo,
                intereses: this.intereses,

            }
            this.$emit('subir-datos', montoinversion)

            this.nombre = ''
            this.apellido = ''
            this.monto = null
            this.dias = null
            this.reinversion = ''
            this.montoFinal = null
            this.interes = null
            this.montoFinalreinversion = null
            this.inicialSegPeriodo = null
            this.finalSegPeriodo = null
            this.inicialTercerPeriodo = null
            this.finalTercerPeriodo = null
            this.inicialCuartoPeriodo = null
            this.finalCuartoPeriodo = null
            this.intereses = null
        },
        calcularMonto() {

            //let interes = NaN;

            if (!(this.dias > 60)) this.interes = 40;
            else if (!(this.dias > 120)) this.interes = 45;
            else if (!(this.dias > 360)) this.interes = 50;
            else this.interes = 55;

            this.montoFinal = (this.monto * ((this.dias / 360) * (this.interes / 100))) + this.monto;

        },


        calcularMontoReinvertido() {
            if (this.reinversion === 'si') {
                //let interes = NaN;
                //let montoFinal = 0;
                if (!(this.dias > 60)) this.intereses = 40;
                else if (!(this.dias > 120)) this.intereses = 45;
                else if (!(this.dias > 360)) this.intereses = 50;
                else this.intereses = 55;

                this.montoFinalreinversion = (parseInt(this.monto) * ((this.dias / 360) * (this.intereses / 100))) + parseInt(this.monto);

                this.inicialSegPeriodo = this.montoFinalreinversion;
                this.finalSegPeriodo = (parseInt(this.montoFinalreinversion) * ((this.dias / 360) * (this.intereses / 100))) + parseInt(this.montoFinalreinversion);
                this.inicialTercerPeriodo = this.finalSegPeriodo;
                this.finalTercerPeriodo = (parseInt(this.finalSegPeriodo) * ((this.dias / 360) * (this.intereses / 100))) + parseInt(this.finalSegPeriodo);
                this.inicialCuartoPeriodo = this.finalTercerPeriodo;
                this.finalCuartoPeriodo = (parseInt(this.finalTercerPeriodo) * ((this.dias / 360) * (this.intereses / 100))) + parseInt(this.finalTercerPeriodo);
            }
        },






    }

})