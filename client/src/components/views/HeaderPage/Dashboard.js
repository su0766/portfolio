import React, { useState } from 'react'
import axios from 'axios'
import {Line, Bar, Pie} from 'react-chartjs-2'
import './HeaderPage.css'

function DashBoard() {
    const [chartData, setChartData] = useState({});
    const [chartName, setChartName] = useState({});
    const [chartState, setChartState] = useState({})

    const chart = () => {
        let n_name = []
        let n_state = []
        // axios
        // .get('./api/users/data')
        // .then(res => {
        //     console.log(res)
        //     for(const dataObj of res.data.data){
        //         n_name.push(parseInt(dataObj.chartName))
        //         n_state.push(parseInt(dataObj.chartState))
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        // console.log(n_name, n_state)
        // setChartData({
        //     labels: chartState,
        //     datasets: [
        //         {
        //             label:'experience of programming',
        //             data: chartName,
        //             backgroundColor:[
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)'
        //             ],
        //         }
        //     ]
        // })
    }
    return (
        <div style={{width:'100%', margin:'0'}}>
        <div style={{ width: '85%', margin:'1rem auto'}}>
            <h1>DashBoard is in Progess..</h1>
            <hr />
            <h2>What is your technical experience?</h2>
        </div>
        <div>
            {/* charts */}
        </div>
        </div>
    )
}

export default DashBoard