<template>
    <section>
        <v-container class="mt-10">
            <h1>Gráficos Dinâmicos: Padrões e Tendências de Acidentes</h1>
        </v-container>

        <section-filter/>
    </section>
    
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'DateTimeSelector',
  setup() {
    const dateMenu = ref(false);
    const timeMenu = ref(false);

    const selectedDate = ref(new Date().toISOString().substr(0, 10));
    const selectedTime = ref(new Date().toISOString().substr(11, 5));

    const formattedDate = computed(() => selectedDate.value);
    const formattedTime = computed(() => selectedTime.value);

    return {
      dateMenu,
      timeMenu,
      selectedDate,
      selectedTime,
      formattedDate,
      formattedTime
    };
  }
});
</script>