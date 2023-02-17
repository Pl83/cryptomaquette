<template lang="">
  <div class="main">
    <div class="one">
      <h1>Hi, Rogers</h1>
      <input type="text" placeholder='Search'/>
    </div>
    <div class="two">
      <div class="twoone">
        <h3>Total Balance</h3>
        <div>
          <p class="wx">0.97894652</p>
          <p class="wc">BTC</p>
        </div>
        <p>$40,123.56</p>
      </div>
      <div class="twotwo">
        <p>Portfolio</p>
        <p>Funding</p>
        <p>Assets</p>
        <p>P2P</p>
      </div>
    </div>
    <div class="three">
      <GraphSvg/>
    </div>
    <div class="four"></div>
  </div>
</template>
<script>
import GraphSvg from './GraphSvg.vue';
export default {
  name: 'PartTwo',
  components:{
    GraphSvg
  }
}
</script>
<style scoped>
  .main{
    /*background-color: green;*/
    width: 100%;
    height: 100%;
  }
  .one{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-left: 5vw;
  }
  .one > h1{
  font-family: Poppins;
  font-size: 35px;
  font-weight: 500;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  }
  .one > input{
    height: 1vw;
    width: 12vw;
    left: 768px;
    top: 24px;
    border-radius: 15px;
    padding: 10px 73px 10px 23px;
    margin-left: 12vw;
  }

  
  .two{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 2vw;
    margin-left: 5vw;
    /*margin-right: 5vw;*/
  }

  .twoone{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .two > .twoone > h3{
    font-family: Poppins;
    font-weight: 900;
  }
  .two > .twoone > div{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .two > .twoone > div > .wx{
    font-family: Poppins;
    font-weight: 700;
  }

  .two > .twoone > div > .wc{
    font-family: Inter;
    font-weight: 700;
    background-color: rgba(250, 255, 0, 1);
    border-radius: 8px;
    color: black;
  }
  .two > .twoone > p{
    font-family: Poppins;
    font-weight: 600;
  }

  .twotwo{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    background-color: rgba(41, 39, 39, 1);
    border-radius: 17px;
    padding: 0 0.4vw 0 0.4vw;
    margin-left: 10vw;
  }
  .twotwo p:nth-child(1){
    background-color: rgba(13, 12, 12, 1);
    border-radius: 17px ;
    padding: 0.4vw;
  }

</style>