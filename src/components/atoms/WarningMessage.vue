<template>
  <div class="warning">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'WarningMessage',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/colors.scss';

  .warning {
    padding: 15px;
    color: $color-warning;
    border: 2px solid;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
  }
</style>
