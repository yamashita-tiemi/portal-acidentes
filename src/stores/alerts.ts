// Utilities
import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', {

  state: () => ({
    alerts: [{
      title: 'Faça a sua doação para ajudar os desenvolvedores',
      description: 'Description1',
    },
    {
      title: 'A plataforma estará indisponível na próxima segunda-feira',
      description: 'Description2',
    },
    {
      title: 'Novo gráfico cadastrado!',
      description: 'Description3',
    }],
    newAlerts: 3,
  }),
  getters: {
    getRandom: state => {
      return state.alerts[Math.floor(Math.random() * state.alerts.length)]
    },
    getLength: state => {
      return state.alerts.length
    },
  },
  actions: {
    removeAlert (index: number) {
      this.alerts.splice(index, 1)
    },
  },
})