<template>
  <div>
    <v-app>
      <GlobalHeader />
      <v-main class="app-container">
        <v-container>
          <nuxt-page />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="sass">
.app-container
  background: rgb(40, 40, 40)
</style>
