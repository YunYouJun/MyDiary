<template>
  <v-app>
    <main-toolbar />
    <v-progress-linear
      :active="progress"
      :indeterminate="true"
      style="position:absolute;margin-top:48px;"
    />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import MainToolbar from '@/components/layout/MainToolbar.vue'
export default {
  components: {
    MainToolbar
  },
  data() {
    return {
      progress: false
    }
  },
  methods: {
    showProgress() {
      this.active = true
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Nunito', 'Kosugi Maru', 'Segoe UI', Tahoma, Geneva, Verdana,
    sans-serif;
  background: transparent;
}
</style>
