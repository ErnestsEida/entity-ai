import axios from 'axios'
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
    speaker: true as boolean,
  }),

  actions: {
    addResponse(question: string) {
      this.responses.push({ loading: true, question: question, response: '' })
      const newResponse = this.responses[this.responses.length - 1]
      if (!this.speaker) {
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
      } else {
        POST({
          url: 'http://localhost:3001/response/text',
          params: {
            question,
            speech: this.speaker,
          },
          successCallback: (response: any) => {
            newResponse.loading = false
            newResponse.response = response
          },
          errorCallback: (response: any) => {
            console.error(response)
          },
        })
      }
    },
  },
})
