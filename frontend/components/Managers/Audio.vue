<template>
  <div>
    <v-icon icon="mdi-microphone" />
    <audio ref="audioPlayer" controls>
      <source :src="mp3URL" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import { useResponseStore } from '~/stores/responseStore'

export default {
  // Add returned .mp3 file string to and <audio> tags src attribute, then play it.
  setup() {
    const responseStore = useResponseStore()
    return {
      responseStore,
    }
  },

  data() {
    return {
      mp3URL: '',
    }
  },

  watch: {
    'responseStore.audioQueue': {
      handler() {
        if (this.responseStore.audioQueue.length > 0) {
          const audioData = this.responseStore.audioQueue.pop()
          const audioBlob = new Blob([audioData], { type: 'audio/mpeg' })
          this.mp3URL = URL.createObjectURL(audioBlob)
        }
      },
      deep: true,
    },
  },
}
</script>
