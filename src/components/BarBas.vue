<template lang="">
  <div class="main">
    <div class="svg" v-html="svg"></div>
    <div class="name">
      <p>{{ nameone }}</p>
      <p>{{ nametwo }}</p>
    </div>
    <div class="price">
      <p>{{ priceone }}</p>
      <p>{{ pricetwo }}</p>
    </div>
    <div class="change">
      <p>{{ changeone }}</p>
      <p>{{ changetwo }}</p>
    </div>
    <div class="courbe"  v-html="courbe" ></div>
    <button>Trade</button>
  </div>
</template>
<script>
export default {
  name: 'BarBas',
  props: {
    svg: String,
    nameone: String,
    nametwo: String,
    priceone: String,
    pricetwo: String,
    changeone: String,
    changetwo: String,
    courbe: String,
  }
}
</script>
<style scoped>
  .main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgba(32, 35, 43, 0.7);
    border-radius: 30px;
    padding-left: 15px;
    padding-right: 3vw;
  }
  button{
    background-color: black;
    border-radius: 30px ;
    padding: 10px 20px 10px 20px;
    color: rgba(255, 255, 255, 1);
  }
</style>