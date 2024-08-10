<template>
  <v-app theme="light">
    <app-bar/>

    <v-main>
      <!-- <router-view /> -->
      <section-primary/>

      <v-container class="mt-12">
        <h2>Alguns valores/noticias</h2>
        <v-row class="align-center justify-space-between mt-8">
          <card/>
          <card/>
          <card/>
        </v-row>
      </v-container>

      <app-footer/>
    </v-main>

  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
