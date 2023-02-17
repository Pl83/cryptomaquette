<template lang="">
  <div class="main">
    <div class="logo" v-html="money"></div>
    <div class="one">
      <p>{{ calling }}</p>
      <p>{{ what }}</p>
    </div>
    <div class="two">
      <p>{{ damm }}</p>
      <p>{{ time}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CoponentsGauche',
  props: {
    money: String,
    calling: String,
    what: String,
    damm: String,
    time: String
  }
}
</script>
<style scoped>
  .main{
    display : flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 5%;
    font-family: Inter;
    font-weight: 600;
  }
  .logo{
    width: 2vw;
    height: 2vw;
  }
</style>