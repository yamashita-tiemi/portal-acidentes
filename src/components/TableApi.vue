<template>
  <v-card
    title="Taxa de mortalidade por lesões de trânsito "
    class="bg-grey-lighten-5 mt-8"
    flat
  >
    <v-data-table 
      :headers="headers" 
      :items="items"
    ></v-data-table>
  </v-card>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const APIURL = 'https://servicodados.ibge.gov.br/api/v3/agregados/4408/periodos/2000%7C2001%7C2002%7C2003%7C2004%7C2005%7C2006%7C2007%7C2008%7C2009%7C2010%7C2011%7C2012%7C2013%7C2014%7C2015%7C2016%7C2017%7C2018%7C2019%7C2020%7C2021%7C2022/variaveis/9734?localidades=N3[31]&classificacao=2[6794]|58[95253]';

var headers = ref();
var items = ref();

axios.get(APIURL)
  .then(function (response) {
    console.log("1" + response);
    headers.value = [
      { title: 'Id', key: 'id' },
      { title: 'Ano', key: 'ano' },
      { title: 'Porcentagem (%)', key: 'porcentagem' },
    ];

    var qualquer = response.data.map(e => {
      var resultados = e.resultados[0].series[0].serie;

      const dataArray = Object.entries(resultados).map(([ano, value]) => ({
        ano: Number(ano),
        value: parseFloat(value)
      }));

      items.value = dataArray.map((x, index) => {
        return {
          id: index + 1,
          ano: x.ano,
          porcentagem: x.value,
        }
      })
    })
  })
  .catch(function (error) {
    console.error(error);
  });
</script>