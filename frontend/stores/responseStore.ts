import { defineStore } from 'pinia'
import { POST } from '~/helpers/APICaller'

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
      POST({
        url: 'http://localhost:3001/response/text',
        params: {
          question,
        },
        successCallback: (response: any) => {
          newResponse.loading = false
          newResponse.response = response.answer
        },
        errorCallback: (response: any) => {
          newResponse.loading = false
          console.error(response)
        },
      })
    },
  },
})
