app.component('formulario', {

    template:
    /*html*/
        ` <div class="title">
    <h1>{{titulo}}</h1>
</div>
<div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
    <div class="u-expanded-width-lg u-expanded-width-sm u-shape u-shape-svg u-text-palette-1-light-1 u-shape-1">
        <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 150"><use xlink:href="#svg-1073"></use></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content" viewBox="0 0 160 150" x="0px" y="0px" id="svg-1073"><path d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
C6.9,115.6,25.2,125.2,43.2,126.9z"></path></svg>
    </div>
    <div class="u-align-left u-image u-image-circle u-preserve-proportions u-image-1" data-image-width="616" data-image-height="616"></div>
    <div class="u-palette-1-light-2 u-shape u-shape-circle u-shape-2"></div>
    <div class="u-form u-radius-10 u-white u-form-1" style="padding: 20px;">
        <index-agregados @subir-datos="mostrarcalculo"></index-agregados>
        <dias></dias>
        <mostrar-calculo v-if="datos.length" :datos="datos"></mostrar-calculo>
        <mostrar-calculo-Reinvertido v-if="datos.length" :datos="datos"></mostrar-calculo-Reinvertido>

    </div>

</div>
</div>
</div>`,

    data() {
        return {
            datos: [],
        }
    },
    methods: {
        mostrarcalculo(datos) {

            this.datos.push(datos)


        }
    }
})