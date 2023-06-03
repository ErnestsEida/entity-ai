<template>
  <v-app-bar :elevation="1" class="global-header d-flex align-center">
    <div
      class="global-header-title w-100 d-flex align-center ml-4"
      :class="[responsesPresent ? 'justify-space-between' : 'justify-start']"
    >
      <div class="d-flex align-center">
        <v-icon icon="mdi-progress-wrench" />
        <div class="text-subtitle ml-2">ENTITY AI</div>
      </div>
      <v-btn
        v-if="responsesPresent"
        color="secondary"
        variant="tonal"
        class="mr-8"
        @click="resetChat()"
        >New chat</v-btn
      >
    </div>
  </v-app-bar>
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

  computed: {
    responsesPresent() {
      return this.responseStore.responses.length > 0
    },
  },

  methods: {
    resetChat() {
      this.responseStore.responses = []
    },
  },
}
</script>

<style lang="sass">
.global-header
  background: rgb(40, 40, 40) !important
  border-bottom: 1px solid gray
  .global-header-title
    .text-subtitle, i
      font-size: 25px
      font-weight: 700
      background: linear-gradient(-160deg, white,black)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
</style>
