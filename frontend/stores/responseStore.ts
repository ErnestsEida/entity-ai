import { defineStore } from 'pinia'
import { GET } from '~/helpers/APICaller'

interface IQuestionResponse {
  question: string
  response: string
}

export const useResponseStore = defineStore('responseStore', {
  state: () => ({
    responses: [] as IQuestionResponse[],
  }),

  actions: {
    addResponse(question: string) {
      const config = useRuntimeConfig()
      GET({
        url: 'http://localhost:3001/',
        params: {},
        successCallback: (response: any) => {
          console.log(response)
        },
        errorCallback: (response: any) => {
          console.error(response)
        },
      })
      this.responses.push({ question: question, response: 'Nothing new :(' })
    },
  },
})
