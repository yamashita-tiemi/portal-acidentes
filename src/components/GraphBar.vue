<template>
    <v-container>
      <VueDatePicker v-model="date" @update:model-value="filter" :enable-time-picker="false"></VueDatePicker>
    </v-container>
    <canvas id="canvas"></canvas>
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
//   import VueDatePicker from '@vuepic/vue-datepicker';
//   import '@vuepic/vue-datepicker/dist/main.css'

  var date = ref({
    date: new Date().getDate()
  });
  var data;
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
            data = datapoints;
            newCharts(data); 
        });
    }
    updateChart();
    

    function filter(modelData) {
        var months = data.filter(x => (
            new Date(x.datetime).getDate() == modelData.getDate() &&
            new Date(x.datetime).getMonth() == modelData.getMonth() &&
            new Date(x.datetime).getFullYear() == modelData.getFullYear()
        ));
        newCharts(months);
    }
    
    function newCharts(l) {
        if(myChart != null) { myChart.destroy(); }
        myChart = new ChartJS(
            document.getElementById('canvas'),
            {
                type: 'line',
                data: {
                    labels: l.map(e => e.datetime),
                    datasets: [{
                        label: 'Gráfico ao longo do mês',
                        data: l.map(e => e.value),
                        backgroundColor: 'rgba(0, 119, 204, 0.3)',
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
            }}
        );
    }
</script>
