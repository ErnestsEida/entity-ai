import { defineStore } from 'pinia'

export const useResponseStore = defineStore('responseStore', {
  state: () => ({
    responses: [] as string[],
  }),

  actions: {
    addResponse(response: string) {
      this.responses.push(response)
    },
  },
})
