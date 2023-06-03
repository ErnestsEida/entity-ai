<template>
  <div class="w-100 h-100 d-flex flex-column justify-center">
    <div
      v-if="responseStore.responses.length > 0"
      class="response-container mb-8"
    >
      <div
        v-for="response in responseStore.responses"
        class="response-block d-flex mt-8"
      >
        <div class="icon d-flex justify-center align-center">
          <v-icon icon="mdi-robot" />
        </div>
        <div class="text ml-4 d-flex align-center text-justify">
          {{ response }}
        </div>
      </div>
    </div>

    <div v-else class="no-responses-block my-8">
      <div class="text-h5 text-center">
        Hey! there are not responses, try asking a question
      </div>
    </div>

    <div class="question-input-field w-100 h-100 d-flex align-center">
      <v-text-field
        v-model="questionValue"
        label="Whats on your mind?..."
        variant="solo-filled"
        hide-details
        @keyup.enter="submitResponse()"
      />
      <v-icon icon="mdi-send" class="ml-2" @click="submitResponse()" />
    </div>
  </div>
</template>

<script lang="ts">
import { useResponseStore } from '~/stores/responseStore'

export default {
  setup() {
    const responseStore = useResponseStore()
    return {
      responseStore,
    }
  },

  data() {
    return {
      questionValue: '',
    }
  },

  methods: {
    submitResponse() {
      this.responseStore.addResponse(this.questionValue)
      this.questionValue = ''
    },
  },
}
</script>

<style lang="sass">
.no-responses-block
  color: gray
.question-input-field
  i
    color: white
    font-size: 35px
.response-block
  .icon
    font-size: 20px
    min-width: 48px
    height: 48px
    border: 1px solid white
    border-radius: 8px
.response-container
  color: lightgray
</style>
