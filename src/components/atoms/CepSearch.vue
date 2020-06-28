<template>
  <div id="cepSearch">
    <input type="text" v-model="cep" :placeholder="text('cepInputPlaceholder')" class="input">
    <button type="submit" class="button">{{text('cepButton')}}</button>
  </div>
</template>

<script>
import { text } from '@/assets/js/texts.js'

export default {
  name: 'CepSearch',
  data: () => ({
    cep: '',
  }),
  methods: {
    text,
  }
}
</script>

<style lang="scss" scoped>
  #cepSearch {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 10px;
  }
</style>
