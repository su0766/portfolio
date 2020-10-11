import React, { useState,  useEffect, Component } from 'react'
import {Line, Bar, Pie} from 'react-chartjs-2'
import Header from '../../commons/Header/Header'
import './HeaderPage.css'


function SkillPage() {
    const [stackData, setStackData] = useState({})

    const chart = () => {
        setStackData({
            labels: ['Python', 'C/C++', 'Machine Learning', 'Frontend', 'Backend', 'Dev-Ops'],
            datasets: [{
                  label: 'Technical Stack', 
                  data: [30, 20, 20, 10, 10, 10],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(255, 0, 3, 0.2)',
                      'rgba(20, 102, 244, 0.2)',
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(255, 0, 3, 1)',
                      'rgba(20, 102, 244, 1)',
                  ],
                  borderWidth: 1
              }]
        })
    }

    
    useEffect(() => {
        chart()
      })

    return (
        <div style={{width:'100%', margin:'0'}}>
            {/* <Header/> */}
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>Skills</h1>
                <hr />
            </div>
            <div className='chart'>
                <Pie data={stackData} options={{
                    responsive: true,
                    title: {text: 'Technical Stack', 
                            display: true,
                            fontSize: 25},
                    animation: {animateScale: true},
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true,
                                    display: false
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }}}
                />
                    
            </div>
        </div>
    )
}

export default SkillPage