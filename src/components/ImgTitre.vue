
<template>
  <div>
    <div v-html="link"></div>
    <h2>{{ word }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ImgTitre',
  props: {
    link: String,
    word: String
  }
}
</script>
<style scoped>
  div{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 6%;
    padding-left: 1.5vw;
    /*font-family: Poppins;
    font-size: 25px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;*/
    text-align: left;

  }
</style>