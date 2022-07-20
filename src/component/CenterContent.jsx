import React from "react";
import Chart from './Chart';
import RightSide from './RightSide';

const CenterContent = () => {
    return <>
        <Chart />

        <div className='rightside'>
            <RightSide />
        </div>
    </>
}

export default CenterContent;