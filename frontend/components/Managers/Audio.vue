<template>
  <div></div>
</template>

<script>
import RecordRTC from 'recordrtc'

export default {
  data() {
    return {
      recorder: null,
      recording: null,
      recordedBlob: null,
    }
  },

  methods: {
    startRecording() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        this.recording = true
        this.recorder = RecordRTC(stream, {
          type: 'audio',
          mimeType: 'audio/webm',
        })
        this.recorder.startRecording()
      })
    },

    stopRecording() {
      this.recording = false
      this.recorder.stopRecording(() => {
        this.recordedBlob = this.recorder.getBlob()
        this.recorder.reset()
      })
    },
  },
}
</script>
