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
    <div class="four">
      <div class="az">
        <p>Recent Transactions</p>
        <p>See all coins</p>
      </div>
      <BarBas v-for="(content, index) in contents" :key="index" :svg="content.svg" :nameone="content.nameone" :nametwo="content.nametwo" :priceone="content.priceone" :pricetwo="content.pricetwo" :changeone="content.changeone" :changetwo="content.changetwo" :courbe="content.courbe"/>
    </div>
  </div>
</template>
<script>
import GraphSvg from './GraphSvg.vue';
import BarBas from './BarBas.vue';
export default {
  name: 'PartTwo',
  components:{
    GraphSvg,
    BarBas
  },
  data (){
    return{
      contents : [
        {
          svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.334 24.5836L25.9069 25.5422C27.5744 25.9896 28.2689 27.3689 27.8038 28.9483C27.4953 30.1011 26.7025 30.9961 25.6434 31.138C25.2436 31.2011 24.7169 31.1024 24.2802 30.9852L20.866 30.0692L22.334 24.5836ZM28.7163 18.5418C29.3245 19.131 29.4691 20.0219 29.2244 20.9361C28.8415 22.3672 27.7418 23.1373 26.3127 22.7539L23.0573 21.8805L24.3444 17.0705L27.2028 17.8374C27.838 18.0078 28.3725 18.2366 28.7163 18.5418ZM23.8639 33.8133C23.3674 35.6684 23.1192 36.596 23.1192 36.596C23.1192 36.596 22.4972 36.4291 21.2533 36.0953L21.9979 33.3127L20.0527 32.7908C19.5562 34.6459 19.308 35.5734 19.308 35.5734C19.308 35.5734 18.6861 35.4066 17.4422 35.0728L18.1868 32.2901C15.6989 31.6226 14.455 31.2889 14.455 31.2889C14.455 31.2889 14.6819 30.4409 15.1358 28.745L16.2871 29.0539C16.8825 29.2136 17.4469 28.8537 17.5958 28.2972L20.6062 17.0476C20.7658 16.4513 20.4064 15.8863 19.8506 15.7372C19.0831 15.5312 18.6993 15.4283 18.6993 15.4283C18.6993 15.4283 18.9262 14.5802 19.3801 12.8841L23.1119 13.8854C23.6083 12.0303 23.8565 11.1028 23.8565 11.1028C23.8565 11.1028 24.4785 11.2696 25.7224 11.6034L24.9778 14.386L26.923 14.9079C27.4194 13.0528 27.6676 12.1253 27.6676 12.1253C27.6676 12.1253 28.2896 12.2922 29.5336 12.6259L28.7783 15.4482C29.7204 15.7436 30.4428 16.0653 31.112 16.5857C32.6092 17.669 33.3457 19.5282 32.7925 21.5953C32.3244 23.3444 31.1474 24.5624 29.4765 24.9235C31.36 26.1532 31.7944 28.1869 31.2732 30.1348C30.5634 32.6284 28.4066 34.0096 26.2514 34.1131C25.3937 34.1386 24.6578 34.0263 23.8639 33.8133ZM5.0528 18.8819C2.2658 29.2967 8.4559 40.0326 18.8572 42.8232C29.2585 45.6139 39.9802 39.4155 42.7672 29.0007C45.5542 18.5858 39.364 7.85005 28.9628 5.0594C18.5615 2.26872 7.83979 8.46705 5.0528 18.8819Z" fill="#F28931"/>
</svg>
`,
          nameone: 'Bitcoin',
          nametwo: 'BTC',
          priceone: 'Market Cap',
          pricetwo: '40,243.70',
          changeone: '24h Change',
          changetwo: '+1,56',
          courbe: `<svg width="151" height="18" viewBox="0 0 151 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.04242C6.73136 9.3383 14.7845 12.5525 25.146 7.04242C35.5076 1.53231 42.151 4.74654 44.1774 7.04242C46.4683 10.3223 52.8473 15.898 60.037 11.9622C69.024 7.04242 74.3105 2.12267 86.4695 7.04242C98.6285 11.9622 108.408 16.8819 112.902 11.9622C117.396 7.04242 142.506 2.12267 147 7.04242" stroke="url(#paint0_linear_16_119)" stroke-width="7" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_16_119" x1="75.5" y1="14" x2="75.5" y2="4" gradientUnits="userSpaceOnUse">
<stop stop-color="#592795"/>
<stop offset="1" stop-color="#4D91A5"/>
</linearGradient>
</defs>
</svg>
`,
          ah: 'fir'
        },
        {
          svg: `<svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="20.3283" cy="19.1153" rx="20.3283" ry="19.1153" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.89661 19.1153L20.5957 3.01819V14.7811L9.89661 19.1153ZM30.7598 19.1153L20.5957 14.7868V3.01819L30.7598 19.1153Z" fill="#828384"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5957 25.1516L9.89661 19.493L20.5957 15.0909V25.1516ZM30.7598 19.4939L20.5957 25.1516V15.0909L30.7598 19.4939Z" fill="#343535"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.89661 21.6305L20.5957 27.4381V35.2124L9.89661 21.6305ZM30.7598 21.6305L20.5957 35.2124V27.4374L30.7598 21.6305Z" fill="#828384"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7598 19.1153L20.5957 14.7868V3.01819L30.7598 19.1153Z" fill="#2F3030"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7598 19.4939L20.5957 15.0909V25.1516L30.7598 19.4939Z" fill="#131313"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7598 21.6305L20.5957 27.4374V35.2124L30.7598 21.6305Z" fill="#2F3030"/>
</svg>
`,
          nameone: 'Ethereum',
          nametwo: 'ETH',
          priceone: 'Market Cap',
          pricetwo: '40,243.70',
          changeone: '24h Change',
          changetwo: '-1,56',
          courbe: `<svg width="151" height="18" viewBox="0 0 151 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.04242C6.73136 9.3383 14.7845 12.5525 25.146 7.04242C35.5076 1.53231 42.151 4.74654 44.1774 7.04242C46.4683 10.3223 52.8473 15.898 60.037 11.9622C69.024 7.04242 74.3105 2.12267 86.4695 7.04242C98.6285 11.9622 108.408 16.8819 112.902 11.9622C117.396 7.04242 142.506 2.12267 147 7.04242" stroke="url(#paint0_linear_16_134)" stroke-width="7" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_16_134" x1="75.5" y1="14" x2="75.5" y2="4" gradientUnits="userSpaceOnUse">
<stop stop-color="#091BA9"/>
<stop offset="1" stop-color="#4D91A5"/>
</linearGradient>
</defs>
</svg>
`,
          ah: 'sec'
        }
      ]
    }
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

  .four{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vw;
    gap: 2vw;
  }

  .az{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
    width: 100%;
  }
</style>