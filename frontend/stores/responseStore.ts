import { defineStore } from 'pinia'
import { GET } from '~/helpers/APICaller'

interface IQuestionResponse {
  question: string
  response: string
  loading: boolean
}

export const useResponseStore = defineStore('responseStore', {
  state: () => ({
    responses: [] as IQuestionResponse[],
  }),

  actions: {
    addResponse(question: string) {
      this.responses.push({ loading: true, question: question, response: '' })
      const newResponse = this.responses[this.responses.length - 1]
      GET({
        url: 'http://localhost:3001/',
        params: {
          question,
        },
        successCallback: (response: any) => {
          console.log(response)
          newResponse.loading = false
          newResponse.response = 'Nice, it worked!'
        },
        errorCallback: (response: any) => {
          newResponse.loading = false
          console.error(response)
        },
      })
    },
  },
})
