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
    audioQueue: [] as string[],
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
        axios
          .request({
            method: 'post',
            responseType: 'text',
            url: 'http://localhost:3001/response/text',
            params: {
              question,
              speech: this.speaker,
            },
          })
          .then((response: any) => {
            const responseData: string = response.data
            const parts = responseData.split('\r\n\r\n')
            const mp3Data = parts[1]
            const answer = parts[3]

            this.audioQueue.push(mp3Data)
            newResponse.loading = false
            newResponse.response = answer
          })
          .catch((response: any) => {
            newResponse.loading = false
            console.error(response)
          })
      }
    },
  },
})
