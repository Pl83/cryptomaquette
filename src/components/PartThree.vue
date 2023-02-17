<template lang="">
  <div class="main">
    <div class="topdiv">
      <div class="bell">
        <svg width="37" height="42" viewBox="0 0 37 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.1241 30.7145L28.9447 32.5007H4.05527L5.87585 30.7145L6.625 29.9795V28.93V18.812C6.625 13.486 9.41719 9.51696 13.9723 8.45806L15.9062 8.00849V6.02299V4.64695C15.9062 4.39277 16.1237 4.11157 16.5 4.11157C16.8763 4.11157 17.0938 4.39277 17.0938 4.64695V6.02299V8.00692L19.0258 8.45762C23.5637 9.51621 26.375 13.5084 26.375 18.812V28.93V29.9795L27.1241 30.7145Z" stroke="url(#paint0_linear_16_186)" stroke-width="5"/>
          <ellipse cx="33" cy="4.89612" rx="4" ry="4.85044" fill="#6C1182"/>
          <defs>
          <linearGradient id="paint0_linear_16_186" x1="16.5" y1="1.61157" x2="16.5" y2="41.0715" gradientUnits="userSpaceOnUse">
          <stop stop-color="#3254BD"/>
          <stop offset="0.839229" stop-color="#6C1182"/>
          <stop offset="1" stop-color="#4E33A0"/>
          </linearGradient>
          </defs>
          </svg>
          
      </div>
      <div class="pp">
        <img :src="require('@/assets/pp.png')" alt="">
      </div>
    </div>
    <h3 class="hone">Recent Transaction</h3>
    <div class="gain">
      <coponentsGauche v-for="(thingu, index) in thingus" :key="index"  :money="thingu.money" :calling="thingu.calling" :what="thingu.what" :damm="thingu.damm" 
      :time="thingu.time" />
    </div>
    <h3 class="htwo">Assets</h3>
    <div class="pa">
      <div>
        <div><svg width="71" height="72" viewBox="0 0 71 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0816 37.1188L39.4938 38.8392C42.4863 39.6421 43.7327 42.1175 42.898 44.952C42.3444 47.0208 40.9216 48.6271 39.0208 48.8817C38.3034 48.995 37.358 48.8177 36.5744 48.6075L30.4472 46.9636L33.0816 37.1188ZM44.5357 26.276C45.6271 27.3335 45.8866 28.9323 45.4475 30.573C44.7603 33.1413 42.7868 34.5233 40.222 33.8352L34.3796 32.2677L36.6896 23.6355L41.8195 25.0119C42.9593 25.3177 43.9187 25.7282 44.5357 26.276ZM35.8272 53.6829C34.9363 57.0122 34.4908 58.6768 34.4908 58.6768C34.4908 58.6768 33.3746 58.3774 31.1421 57.7784L32.4785 52.7844L28.9875 51.8478C28.0966 55.1771 27.6511 56.8418 27.6511 56.8418C27.6511 56.8418 26.5349 56.5423 24.3026 55.9433L25.6389 50.9494C21.1741 49.7515 18.9417 49.1525 18.9417 49.1525C18.9417 49.1525 19.3489 47.6307 20.1634 44.587L22.2296 45.1414C23.2981 45.4281 24.311 44.7822 24.5783 43.7835L29.9809 23.5944C30.2672 22.5243 29.6223 21.5103 28.6249 21.2427C27.2474 20.8731 26.5586 20.6883 26.5586 20.6883C26.5586 20.6883 26.9659 19.1663 27.7805 16.1224L34.4777 17.9193C35.3686 14.5901 35.8141 12.9256 35.8141 12.9256C35.8141 12.9256 36.9302 13.225 39.1626 13.824L37.8263 18.8177L41.3173 19.7544C42.2082 16.4252 42.6536 14.7606 42.6536 14.7606C42.6536 14.7606 43.7698 15.0601 46.0023 15.6591L44.6469 20.7241C46.3377 21.2542 47.634 21.8315 48.8351 22.7654C51.522 24.7096 52.8437 28.0461 51.851 31.7559C51.011 34.895 48.8986 37.0808 45.8999 37.7289C49.2801 39.9358 50.0597 43.5855 49.1243 47.0813C47.8505 51.5565 43.9798 54.0353 40.112 54.221C38.5728 54.2667 37.2521 54.0652 35.8272 53.6829ZM2.068 26.8863C-2.93367 45.5772 8.17537 64.8443 26.8421 69.8526C45.5086 74.8608 64.7504 63.7369 69.7521 45.0459C74.7538 26.355 63.6445 7.08806 44.978 2.07983C26.3113 -2.92845 7.06967 8.19536 2.068 26.8863Z" fill="white"/>
          </svg>
        </div>
        <h4>Bitcoin</h4>
        <p>121,6450.45</p>
      </div>
      <p>BTC</p>
    </div>
    <br>
    <br>
    <div class="pb">
      <div>
        <div><svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="42.91" cy="42.965" rx="42.91" ry="42.965" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8903 42.965L43.4745 6.78394V33.2232L20.8903 42.965ZM64.9295 42.965L43.4745 33.236V6.78394L64.9295 42.965Z" fill="#828384"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M43.4745 56.5327L20.8903 43.8139L43.4745 33.9196V56.5327ZM64.9295 43.8161L43.4745 56.5327V33.9196L64.9295 43.8161Z" fill="#343535"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8903 48.6183L43.4745 61.672V79.1461L20.8903 48.6183ZM64.9295 48.6183L43.4745 79.1461V61.6705L64.9295 48.6183Z" fill="#828384"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M64.9294 42.965L43.4744 33.236V6.78394L64.9294 42.965Z" fill="white" fill-opacity="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M64.9294 43.8161L43.4744 33.9196V56.5327L64.9294 43.8161Z" fill="#131313"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M64.9294 48.6183L43.4744 61.6705V79.1461L64.9294 48.6183Z" fill="white" fill-opacity="0.7"/>
          </svg>
          </div>
        <h4>Etherum</h4>
        <p>143,850.45</p>
      </div>
      <p>ETH</p>
    </div>
  </div>
</template>
<script>
import CoponentsGauche from './CoponentsGauche.vue';
export default {
  name: 'PartThree',
  components: {
    CoponentsGauche
  },
  data () {
    return{
      thingus : [
        {
          money : `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_16_215)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0C41.911 0 54 12.089 54 27C54 41.911 41.9105 54 27 54C12.0895 54 0 41.9143 0 27C0 12.0857 12.0874 0 27 0Z" fill="#18624D"/>
                    </g>
                    <g filter="url(#filter1_b_16_215)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3345 29.4959V29.4927C30.1471 29.5045 29.1843 29.5623 27.0405 29.5623C25.3265 29.5623 24.1207 29.5137 23.6957 29.4916V29.497C17.1002 29.2048 12.177 28.0563 12.177 26.682C12.177 25.3077 17.1007 24.1607 23.6957 23.868V28.3527C24.1277 28.3824 25.3633 28.4553 27.0686 28.4553C29.1168 28.4553 30.1466 28.37 30.3356 28.3527V23.868C36.9182 24.1612 41.83 25.3109 41.83 26.6803C41.83 28.0498 36.916 29.2 30.3356 29.4932M30.3323 23.4025V19.386H39.5172V13.2662H14.5066V19.386H23.6925V23.3993C16.227 23.7422 10.6137 25.2207 10.6137 26.9919C10.6137 28.7631 16.2297 30.2416 23.6925 30.5867V43.4522H30.3345V30.5856C37.7865 30.2416 43.3885 28.7642 43.3885 26.9946C43.3885 25.225 37.7865 23.7476 30.3345 23.4036" fill="#F3E2E2"/>
                    </g>
                    <defs>
                    <filter id="filter0_b_16_215" x="-4" y="-4" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_16_215"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_16_215" result="shape"/>
                    </filter>
                    <filter id="filter1_b_16_215" x="6.61371" y="9.26617" width="40.7748" height="38.186" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_16_215"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_16_215" result="shape"/>
                    </filter>
                    </defs>
                    </svg>`,
          calling : `Usdt`,
          what : `Recieved`,
          damm :`+$3,546`,
          time : `Today, 13:45 pm`
        },
        {
          money : `<svg width="67" height="61" viewBox="0 0 67 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_16_249)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 33L12 27L6 21L0 27L6 33Z" fill="#FFE600"/>
                  </g>
                  <g filter="url(#filter1_d_16_249)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M48 33L54 27L48 21L42 27L48 33Z" fill="#FFE600"/>
                  </g>
                  <g filter="url(#filter2_d_16_249)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27 33L33 27L27 21L21 27L27 33Z" fill="#FFE600"/>
                  </g>
                  <g filter="url(#filter3_d_16_249)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30 3L27 1.68619e-08L10.5 16.5L16.5 22.5L27 12L37.5 22.5L43.5 16.5L30 3Z" fill="#FFE600"/>
                  </g>
                  <g filter="url(#filter4_d_16_249)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 51L27 54L43.5 37.5L37.5 31.5L27 42L16.5 31.5L10.5 37.5L24 51Z" fill="#FFE600"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_16_249" x="0" y="21" width="25" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="9" dy="8"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_249"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_249" result="shape"/>
                  </filter>
                  <filter id="filter1_d_16_249" x="42" y="21" width="25" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="9" dy="8"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_249"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_249" result="shape"/>
                  </filter>
                  <filter id="filter2_d_16_249" x="21" y="21" width="25" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="9" dy="8"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_249"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_249" result="shape"/>
                  </filter>
                  <filter id="filter3_d_16_249" x="10.5" y="0" width="46" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="9" dy="8"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_249"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_249" result="shape"/>
                  </filter>
                  <filter id="filter4_d_16_249" x="10.5" y="31.5" width="46" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="9" dy="8"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_249"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_249" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
                  `,
          calling : `BNB`,
          what : `Buy`,
          damm :`+ 0.7546`,
          time : `Today, 5:45 am`
        },
        {
          money : `<svg width="76" height="61" viewBox="0 0 76 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_di_16_268)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52ZM18.1651 25.8391L14.8784 27.0566L13.9495 30.6704L17.2009 29.5192L15.0632 37.856H36.7338L38.064 32.9141H24.7154L26.3747 26.198L30.0329 24.8711L30.8926 21.206L27.453 22.4617L30.1592 11.856H21.8876L18.1651 25.8391Z" fill="#29ABE2"/>
                  </g>
                  <defs>
                  <filter id="filter0_di_16_268" x="0" y="0" width="76" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="20" dy="80"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_268"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_268" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="9" dy="9"/>
                  <feGaussianBlur stdDeviation="35"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_16_268"/>
                  </filter>
                  </defs>
                  </svg>
                  `,
          calling : `Lite Coin`,
          what : `withdrawal`,
          damm :`- 0.7546`,
          time : `Today, 7:55 am`
        },
        {
          money : `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_i_16_276)">
                  <path d="M26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52Z" fill="#FF8E04"/>
                  <path d="M37.6821 22.7825C38.1924 19.3765 35.5973 17.5451 32.0515 16.3231L33.202 11.7081L30.394 11.0094L29.2728 15.5025C28.535 15.3173 27.7778 15.145 27.0221 14.9728L28.1515 10.4504L25.3435 9.75L24.193 14.3634C23.582 14.2236 22.9808 14.0871 22.399 13.9409L22.4023 13.9262L18.5283 12.9594L17.7808 15.9591C17.7808 15.9591 19.8656 16.4369 19.8218 16.4661C20.9593 16.7505 21.164 17.5029 21.1299 18.1009L19.8201 23.3577C19.8981 23.3773 19.9989 23.4065 20.1126 23.4504L19.8153 23.3773L17.979 30.7418C17.8393 31.0863 17.4866 31.6046 16.6904 31.408C16.7196 31.4486 14.6494 30.8994 14.6494 30.8994L13.2551 34.1136L16.9114 35.0253C17.5906 35.1959 18.2569 35.3746 18.9118 35.542L17.7499 40.209L20.5563 40.9078L21.7068 36.2928C22.4738 36.4991 23.218 36.6909 23.946 36.8729L22.7988 41.4684L25.6068 42.1671L26.7686 37.5099C31.5591 38.4166 35.1601 38.051 36.6763 33.7188C37.8983 30.2315 36.6161 28.2181 34.0958 26.9068C35.932 26.4843 37.3132 25.2769 37.6821 22.7825ZM31.2634 31.7818C30.3973 35.2706 24.5229 33.384 22.6184 32.9111L24.1621 26.728C26.0666 27.2041 32.1718 28.145 31.2634 31.7818ZM32.1328 22.7321C31.3414 25.9058 26.4534 24.2921 24.869 23.8973L26.2665 18.291C27.8509 18.6859 32.9583 19.422 32.1328 22.7321Z" fill="white"/>
                  </g>
                  <defs>
                  <filter id="filter0_i_16_276" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="12" dy="4"/>
                  <feGaussianBlur stdDeviation="1.5"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.555053 0 0 0 0 0.0166667 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16_276"/>
                  </filter>
                  </defs>
                  </svg>
                  `,
          calling : `Bitcoin`,
          what : `Received`,
          damm :`+ 2.7546`,
          time : `Today, 8:55 am`
        },
        {
          money : `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="27" cy="27" r="27" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1447 27L27.3552 4.26312V20.878L13.1447 27ZM40.8552 27L27.3552 20.8861V4.26312L40.8552 27Z" fill="#828384"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3552 35.5261L13.1447 27.5334L27.3552 21.3156V35.5261ZM40.8552 27.5348L27.3552 35.5261V21.3156L40.8552 27.5348Z" fill="#343535"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1447 30.5526L27.3552 38.7557V49.7368L13.1447 30.5526ZM40.8552 30.5526L27.3552 49.7368V38.7548L40.8552 30.5526Z" fill="#828384"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8552 27L27.3552 20.8861V4.26312L40.8552 27Z" fill="white" fill-opacity="0.7"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8552 27.5348L27.3552 21.3156V35.5261L40.8552 27.5348Z" fill="#131313"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8552 30.5526L27.3552 38.7548V49.7368L40.8552 30.5526Z" fill="white" fill-opacity="0.7"/>
                  </svg>
                  `,
          calling : `Ethereum`,
          what : `Received`,
          damm :`+ 1.646`,
          time : `Today, 10:02 am`
        }
      ]
    }
  }
}
</script>
<style scoped>
  .main {
    background-color: #1E1E1E;
    width: 100%;
    height: 100%;
  }
  .topdiv{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /*margin-top: 2.5vh;*/
    padding-top: 1vw;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
  }
  .pp > img{
    height: 54px;
    width: 54px;
    border-radius: 60px;
  }
  .hone{
    padding-right: 11.5vw ;
    font-family: Poppins;
    font-weight: 700;
  }
  .htwo{
    padding-right: 16vw ;
    font-family: Poppins;
    font-weight: 700;
  }
  .pa{
    background: linear-gradient(98.73deg, #611D8D 35.75%, #2F7EC1 73.26%);
    width: 80%;
    margin-left: 2.8vw;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    line-height: 0;
    justify-content: space-around;
    align-items: baseline;
  }
  .pa p{
    font-family: Inter;
    text-align: center;
  }
  .pb{
    background: linear-gradient(99.56deg, #FAFF00 35.82%, #29ABE2 64.75%, rgba(255, 255, 255, 0.7) 91.33%);
    width: 80%;
    margin-left: 2.8vw;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    line-height: 0;
    justify-content: space-around;
    color: black;
    align-items: baseline;
  }

  .pb p{
    font-family: Inter;
    text-align: center;
  }
</style>