import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')


/*
<canvas id="graph"></canvas>
script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>

let graph = document.getElementById('graph').getContext('2d');

new Chart(graph, {
    type: 'line',
    data: {
        labels: [
          '5Nov',
          '6Nov',
          '7Nov',
          '8Nov',
          '9Nov',
          '10Nov',
          '11Nov',
          '12Nov',
          '13Nov',
          '14Nov',
          '15Nov',
        ],
        datasets: [
          {
            label:'ETH',
            data: [
              100,
              400,
              600,
              400,
              500,
              600,
              700,
              800,
              500,
              350
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label:'BTC',
            data: [
              700,
              400,
              600,
              800,
              500,
              100,
              400,
              500,
              600,
              350
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
          },
          {
            label:'XRP',
            data: [
              100,
              800,
              500,
              350,
              600,
              400,
              500,
              600,
              400,
              700,
            ],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
          }
        ]
    }
})
*/