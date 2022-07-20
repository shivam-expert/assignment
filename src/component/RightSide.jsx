import React from 'react';

const  RightSide = () =>{
    return<>
        <div className='right_side_content'>
            <h3>Notifications</h3>
            <ul>
                <li><span className='notice_h'>Lorem,</span> <span>ipsum dolor.</span>
                    <p className='notice_time'>just now.</p>
                </li>
                <li><span className='notice_h'>Lorem,</span> <span>ipsum dolor.</span>
                    <p className='notice_time'>1 minute.</p>
                </li>

                <li><span className='notice_h'>Lorem,</span> <span>ipsum dolor.</span>
                    <p className='notice_time'>45 minute.</p>
                </li>

                <li><span className='notice_h'>Lorem,</span> <span>ipsum dolor.</span>
                    <p className='notice_time'>just</p>
                </li>

                <li><span className='notice_h'>Lorem,</span> <span>ipsum dolor.</span>
                    <p className='notice_time'>just</p>
                </li>

                <li><span className='notice_h'>Lorem,</span> <span>ipsum dolor.</span>
                    <p className='notice_time'>just</p>
                </li>

                <li><span className='notice_h'>Lorem,</span> <span>ipsum dolor.</span>
                    <p className='notice_time'>just</p>
                </li>

            </ul>
            <a className='show_all_notice' href='#'>show all notification</a>
        </div>
    </>
}

export default RightSide;
