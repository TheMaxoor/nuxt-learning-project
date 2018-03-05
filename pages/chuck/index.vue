<template>
  <div class="row">
    <div class="col">
      <fact/>
    </div>
  </div>
</template>

<script>
import Fact from '~/components/Fact.vue'

export default {
  components: {
    // register components here 🔥
    Fact
  },
  async fetch ({ store, params }) {
    await store.dispatch('getJoke')
  }
}
</script>

<style>
</style>
