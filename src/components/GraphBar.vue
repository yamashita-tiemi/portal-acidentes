<template>
    <canvas id="canvas"></canvas>
</template>
  
<script lang="ts">
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
            var labels = datapoints.map(function(e) {
                return e.datetime;
            } );
            var data = datapoints.map(function(e) {
                return e.value;
            } );
            console.log(labels, data);

            var myChart = new ChartJS(
                document.getElementById('canvas') as HTMLCanvasElement,
                {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Gráfico ao longo do mês',
                            data: data,
                            backgroundColor: 'rgba(0, 119, 204, 0.3)',
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                }}
            );
        });
    }
    updateChart();

    export default {
        methods: {
            updateChart: updateChart
        },

        name: 'App',
        components: {
            Line
        }
    }
</script>