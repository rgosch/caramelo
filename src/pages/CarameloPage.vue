<template>
  <main class="wrapper">
    <CepSearch />
    <WarningMessage :msg="text('errorMask')" />
    <CepData
      cep="90000-000"
      state="RS"
      city="Porto Alegre"
      addressLine="Rua General Silva"
    />
  </main>
</template>

<script>
import CepSearch from '@/components/atoms/CepSearch.vue';
import WarningMessage from '@/components/atoms/WarningMessage.vue';
import CepData from '@/components/atoms/CepData.vue';
import { text } from '@/assets/js/texts.js';

export default {
  name: 'CarameloPage',
  components: {
    CepSearch,
    WarningMessage,
    CepData,
  },
  methods: {
    text,
  }
}
</script>

<style lang="scss" scoped>
  main {
    margin-top: 50px;
    display: grid;
    grid-row-gap: 20px;
  }
</style>
