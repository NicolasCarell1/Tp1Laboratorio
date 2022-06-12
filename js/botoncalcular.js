app.component('boton-calcular', {
    template:
    /*html*/
        `
<div class="u-align-right u-form-group u-form-submit">
    <button 
    value="Submit"
    type="submit"
        @click="verificarDatos"
        id="btnCalcular" 
        class="u-active-palette-1-light-1 u-border-2 u-border-active-palette-1-light-1 u-border-hover-palette-1-light-1 u-border-palette-1-base u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-10 u-btn-1"
        >{{buttonName}}
    </button>
</div>
`,
    data() {
        return {
            buttonName: 'Calcular',
        }
    },
    props: {
        dias: {
            type: Number,
            required: true
        },
        monto: {
            type: Number,
            required: true
        },
        reinversion: {
            type: Option,
            required: true
        },
        verificarDatos: {
            type: function() {},
            required: true
        }
    },
    /*     methods: {
            calcularInversion() {
                this.$emit('mostrar-calculo')
            },
        } */

})