<template>
  <div>
    <h1 class="fact-title">
      {{$store.state.joke.value }}
    </h1>

    <hr class="my-4"/>
    <div class="fact-link">
      <a :href="$store.state.joke.url" class="btn btn-default" target="_blank">View it here 👀</a>
      <button class="btn btn-info" @click="getJoke">Get a new one 👌</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'getJoke'
      ])
    }
  }
</script>


<style scoped>
    .fact-title{
      font-size: 2rem;
    }

    .fact-link {
      text-decoration: none;
      color: #1a5a9f;
    }
</style>
