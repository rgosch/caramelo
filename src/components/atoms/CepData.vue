<template>
  <article>
    <ul class="content">
      <li class="row">
        <span class="title">{{text('cep')}}</span>
        {{cep}}
      </li>
      <li class="row">
        <span class="title">{{text('state')}}</span>
        {{state}}
      </li>
      <li class="row">
        <span class="title">{{text('city')}}</span>
        {{city}}
      </li>
      <li class="row">
        <span class="title">{{text('addressLine')}}</span>
        {{addressLine}}
      </li>
    </ul>
  </article>
</template>

<script>
import { text } from '@/assets/js/texts.js';

export default {
  name: 'CepData',
  props: {
    cep: String,
    state: String,
    city: String,
    addressLine: String,
  },
  methods: {
    text,
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/colors.scss';

  article {
    padding: 15px;
    font-size: 14px;
    border: 2px solid #5F5956;
    color: $color-grey-dark;

    .content {
      display: grid;
      grid-row-gap: 5px;

      .row {
        display: grid;
        grid-column-gap: 5px;
        grid-template-columns: auto 1fr;

        .title {
          font-weight: bold;

          &:after {
            content: ':'
          }
        }
      }
    }
  }
</style>
