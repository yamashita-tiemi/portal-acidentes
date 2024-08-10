<template>
    <v-navigation-drawer v-model="isDrawerOpen" temporary >
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Page 1"></v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Page 2"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="pr-5">
        <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
        <v-app-bar-title>Portal MAAT MG</v-app-bar-title>

        <template #append>
            <v-btn><router-link to="/" class="no-link-style">Home</router-link></v-btn>
            <v-btn><router-link to="/dashboard" class="no-link-style">Page 1</router-link></v-btn>
            <v-btn><router-link to="/" class="no-link-style">Page 2</router-link></v-btn>
        </template>
    </v-app-bar>
</template>

<style scoped>
.no-link-style {
  text-decoration: none;
  color: inherit;
}
</style>

<script lang="ts" setup>
  import { ref } from 'vue';

  const isDrawerOpen = ref(false);
</script>