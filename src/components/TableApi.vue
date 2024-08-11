<template>
    <v-container>
      <v-data-table-server

        :headers="headers"
        :items="items"
      ></v-data-table-server>
    </v-container>
</template>

<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  const APIURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/municipios';

  var headers = ref();
  var items = ref();
  // var itemsPerPage = ref(4);
  // var totalItems = ref();


  axios.get(APIURL)
    .then(function (response) {
      teste(response);
    })
    .catch(function (error) {
      console.error(error);
    });

  function teste(test) {
    headers.value = [
      { title: 'Id', key: 'id' },
      { title: 'Município', key: 'name' },
      { title: 'Constructed', key: 'constructed' },
      { title: 'Description', key: 'description' },
    ];
    items.value = test.data.map(e => { return {
      id: e.id,
      name: e.nome,
      constructed: e.nome,
      description: e.nome,
    }});
    // totalItems.value = items.value.length;
    // itemsPerPage.value = 4;
    
  }
</script>