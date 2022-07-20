import React from 'react';
import Chart1 from '../img/chart.PNG';
import Overview from './Overview';
import RecentOrder from './RecentOrder';


const Chart = () =>{
    return<>
        <div className='chart'>
           <div className='chart_img'>
           <img src={Chart1} alt="" srcset="" />
           </div>

        <Overview/>

        <RecentOrder/>

        </div>       
    </>
}

export default Chart;