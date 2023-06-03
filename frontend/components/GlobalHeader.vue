<template>
  <v-app-bar :elevation="1" class="global-header d-flex align-center">
    <div class="global-header-title w-100 d-flex align-center ml-4">
      <v-icon icon="mdi-progress-wrench" />
      <div class="text-subtitle ml-2">ENTITY AI</div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
export default {}
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
