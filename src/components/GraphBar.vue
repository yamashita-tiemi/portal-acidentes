<template>
    <div class="mt-8 d-flex flex-column align-center">
        <h2 class="mb-2">Gravidade dos acidentes</h2>
        <VueDatePicker v-model="date" @update:model-value="filter" :enable-time-picker="false"></VueDatePicker>
        <canvas id="canvas" class="mt-10"></canvas>
    </div>
</template>

<script setup>
    import { Line } from '/Users/victoriayamashita/Documents/Projetins/vue/portal-acidentes/node_modules/vue-chartjs/dist/index.js'
    // import { Line } from 'vue-chartjs'
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    } from 'chart.js'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    import { ref } from 'vue';

    var date = ref();
    var dataJson;
    var myChart;

    function updateChart() {
        async function fetchData() {
            const APIURL = 'http://localhost:3000/grafico.json';
            const response = await fetch(APIURL)
            if (!response.ok) {
                console.error("Erro ao carregar dados")
            }
            const datapoints = await response.json();
            return datapoints;
        };
        fetchData().then(datapoints => {
            dataJson = datapoints;
            newCharts(dataJson);
        });
    }
    updateChart();


    function filter(modelData) {
        var days = dataJson.filter(x => (
            new Date(x.datetime).getDate() == modelData.getDate() &&
            new Date(x.datetime).getMonth() == modelData.getMonth() &&
            new Date(x.datetime).getFullYear() == modelData.getFullYear()
        ));
        newCharts(days);
    }

    function newCharts(l) {
        var label = l.map(e => new Date(e.datetime).toLocaleDateString());

        if (myChart != null) { myChart.destroy(); }

        if(date.value != null) {
            console.log("dd");
            label = l.map(e => new Date(e.datetime).toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' }))
        }
        myChart = new ChartJS(
            document.getElementById('canvas'),
            {
                type: 'line',
                data: {
                    labels: label,
                    datasets: [{
                        label: 'Média de acidentes em Minas Gerais',
                        data: l.map(e => e.value),
                        backgroundColor: 'rgba(0, 119, 204, 0.3)',
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }
            }
        );
    }
</script>
