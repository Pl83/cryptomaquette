<template>
  <main>
    <div class="a">
      <PartOne/>
    </div>
    <div class="b">
      <PartTwo/>
    </div>
    <div class="c">
      <PartTree/>
    </div>
  </main>
</template>
<script>
import PartOne from '@/components/PartOne.vue';
import PartTwo from '@/components/PartTwo.vue';
import PartTree from '@/components/PartThree.vue';
export default {
  name: 'HomeView',
  components:{
    PartOne,
    PartTwo,
    PartTree
  }
}
</script>
<style>
body{
    margin: 0;
    padding: 0;
    background-color: #1E1E1E;
  }
  main{
    display: grid;
    grid-template-columns: 1fr 3fr 1.25fr;
    grid-template-rows: 1fr;
    grid-template-areas: "a b c";
    min-height: 100vh;
  }
</style>