<template>
  <v-navigation-drawer
    v-model="isDrawerOpen"
    :location="$vuetify.display.mobile ? 'top' : undefined"
    class="d-md-none"
    temporary>
    <v-list color="transparent">
      <v-list-item prepend-icon="mdi-home" title="Início">
        <router-link to="/" class="no-link-style"></router-link>
      </v-list-item>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Dados Visuais">
        <router-link to="/dashboard" class="no-link-style"></router-link>
      </v-list-item>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Análise de Impacto">
        <router-link to="/analise" class="no-link-style"></router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar class="pr-5">
    <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"
      class="d-md-none"
    ></v-app-bar-nav-icon>
    <router-link to="/" class="no-link-style ml-md-8"><v-app-bar-title>Portal MAAT MG</v-app-bar-title></router-link>
    

    <template #append>
      <div class="d-none d-md-block">
        <router-link to="/" class="no-link-style"><v-btn>Início</v-btn></router-link>
        <router-link to="/dashboard" class="no-link-style"><v-btn>Dados Visuais</v-btn></router-link>
        <router-link to="/analise" class="no-link-style"><v-btn>Análise de Impacto</v-btn></router-link>
      </div>
      
      <v-menu bottom left>
        <template v-slot:activator="{ props }">
          <v-btn class="text-none" stacked v-bind="props">
            <v-badge color="error" :content="length">
              <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(n, index) in alerts" @click="handler(index)" :key="index" :title="n.title"
            :subtitle="n.description"></v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAlertsStore } from '../stores/alerts.ts'
const isDrawerOpen = ref(false);
const store = useAlertsStore();
const length = ref(store.getLength)
const alerts = store.alerts

function handler(i) {
  store.removeAlert(i);
  length.value = store.getLength;
}


</script>

<style scoped>
.no-link-style {
  text-decoration: none;
  color: inherit;
}
</style>