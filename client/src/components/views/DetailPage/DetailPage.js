import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../../commons/Footer/Footer'
import Header from '../../commons/Header/Header'
import DetailInfo from './Sections/DetailInfo'

function DetailPage(props) {    

    
    // const reportId = props.match.params.reportId
    // const variable = {reportId: reportId}

    // const [ReportDetail, setReportDetail] = useState([])

    // useEffect(() => {
    //     axios.post('/api/report/getReportDetail', variable)
    //     .then(response => {
    //         if(response.data.success){
    //             setReportDetail(response.data.reportDetail)
    //         } else {
    //             alert('Failed to get report resources.')
    //         }
    //     })

    //     return () => {
    //     }
    // }, [])

    // const [Report, setReport] = useState([])

    return (
        <div>
            {/* <DetailInfo src={`http://localhost:8080/${ReportDetail.filePath}`}>
                report = {Report}
            </DetailInfo> */}
        </div>
    )
}

export default DetailPage