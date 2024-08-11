<template>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="items"
      ></v-data-table>
    </v-container>
</template>

<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  const APIURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/municipios';

  var headers = ref();
  var items = ref();

  axios.get(APIURL)
    .then(function (response) {
      headers.value = [
        { title: 'Id', key: 'id' },
        { title: 'Município', key: 'name' },
        { title: 'Constructed', key: 'constructed' },
        { title: 'Description', key: 'description' },
      ];
      items.value = response.data.map(e => { return {
        id: e.id,
        name: e.nome,
        constructed: e.nome,
        description: e.nome,
      }})
    })
    .catch(function (error) {
      console.error(error);
    });
</script>