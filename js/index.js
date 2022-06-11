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
        <select name="" id="reinversion">
            <option value="" disabled selected hidden>Desea reinvertir?</option>
            <option value="si">Si</option>
            <option value="no">No</option>
        </select>
    </div>
    <div class="u-align-right u-form-group u-form-submit">
        <button onclick="valores()" class="u-active-palette-1-light-1 u-border-2 u-border-active-palette-1-light-1 u-border-hover-palette-1-light-1 u-border-palette-1-base u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-10 u-btn-1">Calcular</button>
    </div>
</form>`,
    data() {
        return {
            nombre: '',
            apellido: '',
            monto: '',
            dias: '',
        }
    },
    methods: {
        onSubmit() {
            let montoinversion = {
                nombre: this.nombre,
                apellido: this.apellido,
                monto: this.monto,
                dias: this.dias,
            }
            this.$emit('agregar', montoinversion)

            this.nombre = ''
            this.apellido = ''
            this.monto = ''
            this.dias = ''
        }
    }
})

app.component('dias', {
    template:
    /*html*/
        `<br>
    <table id='indice-table' class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Dias</th>
                <th scope="col">%</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>30 - 60</td>
                <td>40% anual</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>61 - 120</td>
                <td>45% anual</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>121 - 360</td>
                <td>50% anual</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>+ 361</td>
                <td>55% anual</td>
            </tr>
        </tbody>
    </table>`
})