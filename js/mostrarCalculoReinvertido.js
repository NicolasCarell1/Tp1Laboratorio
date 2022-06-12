app.component('mostrar-calculo-Reinvertido', {
    props: {
        datos: {
            type: Array,
            required: true
        }

    },
    template:
    /*html*/
        `<table v-if="dato.reinversion = true" class="table">
        <thead>
        <tr>
            <th scope="col">Periodo</th>
            <th scope="col">Monto Inicial</th>
            <th scope="col">Monto Final</th>
        </tr>
        </thead>
        <tbody v-for="(dato, index) in datos" :key="index">
        <tr>
            <th scope="row">1</th>
            <td>{{dato.monto}}</td>
            <td>{{dato.montoFinal.toFixed(2)}}</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>{{dato.inicialSegPeriodo.toFixed(2)}}</td>
            <td>{{dato.finalSegPeriodo.toFixed(2)}}</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>{{dato.inicialTercerPeriodo.toFixed(2)}}</td>
            <td>{{dato.finalTercerPeriodo.toFixed(2)}}</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>{{dato.inicialCuartoPeriodo.toFixed(2)}}</td>
            <td>{{dato.finalCuartoPeriodo.toFixed(2)}}</td>
        </tr>
        </tbody>
    </table>`,


})