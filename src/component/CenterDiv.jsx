import React from 'react';
import '../css/CenterDiv.css';
import SideBar from './SideBar';
import CenterContent from './CenterContent';
const CenterDiv = () =>{
    return<>
         <div className='center'>
            <SideBar />
            <div className='main_center_container'>
            <CenterContent />
            </div>
        </div>
    </>
}

export default CenterDiv;