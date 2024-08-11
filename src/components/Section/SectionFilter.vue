<template>
    <section>
        <v-container>
        <v-row>
          <!-- Seletor de Data -->
          <v-col cols="6">
            <v-menu
              v-model="dateMenu"
              :close-on-content-click="false"
              transition="slide-x-reverse-transition"
              offset-y
              min-width="290px"
            >
            <template #activator="{ on, attrs }">
                <v-text-field
                    v-model="formattedDate"
                    label="Escolha uma data"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="selectedDate" @input="dateMenu = false"></v-date-picker>
            </v-menu>
          </v-col>
    
          <!-- Seletor de Hora -->
          <v-col cols="6">
            <v-menu
              v-model="timeMenu"
              :close-on-content-click="false"
              transition="slide-x-reverse-transition"
              offset-y
              min-width="290px"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedTime"
                  label="Escolha uma hora"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-time-picker v-model="selectedTime" format="24hr" @input="timeMenu = false"></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
    
        <v-row>
          <v-col>
            <p>Data Selecionada: {{ formattedDate }}</p>
            <p>Hora Selecionada: {{ formattedTime }}</p>
          </v-col>
        </v-row>
      </v-container>
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