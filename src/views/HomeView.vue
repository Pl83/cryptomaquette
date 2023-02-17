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
  <!--<main>
    <div class="base">
      <div class="a">
        <PartOne />
      </div>
      <div class="b">
        <PartTwo />
      </div>
      <div class="c">
        <PartTree />
      </div>
    </div>

    <div class="tab-content">
      <div v-show="activeTab === 'Tab 1'"> <PartOne /> </div>
      <div v-show="activeTab === 'Tab 2'"> <PartTwo /> </div>
      <div v-show="activeTab === 'Tab 3'"> <PartTree /> </div>
    </div>
  </main>
  <footer>
    <div class="tabs">
      <div class="tab-buttons">
        <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = tab">{{ tab }}</button>
      </div>
    </div>
  </footer> -->
</template>
<script>
import PartOne from "@/components/PartOne.vue";
import PartTwo from "@/components/PartTwo.vue";
import PartTree from "@/components/PartThree.vue";

export default {
  name: "HomeView",
  components: {
    PartOne,
    PartTwo,
    PartTree,
  },
  data() {
    return {
      activeTab: 'Tab 1',
      tabs: ['Tab 1', 'Tab 2', 'Tab 3']
    }
  }
};
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

  /*.base{
    display: block;
    grid-template-areas: "a b c";
  }*/

  /*.tab-content{
    display: none;
  }*/

  footer{
    display:none;
  }

 /* @media screen and (max-width: 769px){
    main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .base{
      display: none;
    }
    .tab-content{
      display: block;
    }
    .tab-buttons {
      display: flex;
      justify-content: space-between;
    }
    .tab-buttons button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-weight: bold;
      color: white;
    }
    .tab-buttons button:focus {
      outline: none;
    }
    .tab-buttons button:hover {
      text-decoration: underline;
    }
    .tab-buttons button.active {
      text-decoration: underline;
    }
    .tab-content {
      margin-top: 1rem;
    }
    footer{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background-color: #1E1E1E;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 10vh;
      color: white;
    }
  }*/
  
</style>