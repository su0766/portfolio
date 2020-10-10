import React, {useRef, useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'


function ChartData(props){
  const [chartData, setChartData] = useState({})

  const chart = () => {
      setChartData({
          labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
          datasets: [{
                label: 'Intel stock price data', 
                data: [51, 51.7, 51.3, 52.7, 53.4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',                                                               
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
      })
  }

  useEffect(() => {
    chart()
  })

  return (
    <Line data={chartData} options={{
        responsive: true,
        title: {text: 'stock price', display: true},
        animation: {
            animateScale: true
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                    },
                    gridLines: {
                        display: true
                    }
                }
            ]
        }
    }}/>
  )

}

export default ChartData