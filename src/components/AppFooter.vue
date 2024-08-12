<template>
  <v-footer class="d-flex flex-column" app>
    <div class="bg-amber-lighten-1 d-flex flex-column flex-sm-row w-100 align-center px-4">
      <strong>Nos siga em nossas redes sociais!</strong>

      <v-spacer></v-spacer>

      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-2"
          size="small"
          variant="plain"
        ></v-btn>
      </div>
    </div>

    <div class="px-4 py-2 text-center w-100">
      &copy;{{ new Date().getFullYear() }} — <span>Todos direitos reservados.</span>
    </div>
  </v-footer>
</template>

<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>