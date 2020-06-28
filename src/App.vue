<template>
  <div id="app">
    <Header />
    <CarameloPage />
  </div>
</template>

<script>
import Header from '@/components/skeleton/Header.vue';
import CarameloPage from '@/pages/CarameloPage.vue';

export default {
  name: 'App',
  components: {
    Header,
    CarameloPage,
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/colors.scss';
  @import '@/assets/scss/constants.scss';
  @import '@/assets/scss/input.scss';
  @import '@/assets/scss/button.scss';
  @import '@/assets/scss/wrapper.scss';
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap');

  body, html {
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    font-weight: normal;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
</style>
