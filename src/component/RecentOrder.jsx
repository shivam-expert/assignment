import React from "react";

const RecentOrder = () => {
    return <>
        <div className="OverView">
            <div className="tabs_con">
                <div>
                    <h2>OverView</h2>
                </div>

                <div className="tabs_ul">
                    <a href="#">View all</a>
                </div>
            </div>

            <div className="recent_data">
                <ul>
                    <li className="active_recent"><a href="#" >Recent</a></li>
                    <li><a href="#">Inprogress</a></li>
                    <li><a href="#">Completed</a></li>
                    <li><a href="#">Cancelled</a></li>

                </ul>
            </div>



            <div className="recent_sec_data">
                <ul className="first_data">
                    <li>Inprogress</li>
                    <li>Inprogress</li>
                    <li>Completed</li>
                    <li>Cancelled</li>

                </ul>

                <ul className="second_data">
                    <li>
                        <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
                        <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
                    </li>

                    <li>
                        <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
                        <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
                    </li>

                    <li>
                        <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
                        <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
                    </li>

                    <li>
                        <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
                        <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
                    </li>

                </ul>
            </div>


        <div className="tabs_con_recent">
        <div className="tabs_ul">
                <ul>
                    <li> <a href="#" className="tabs_a active">day</a></li>
                    <li><a href="#" className="tabs_a">week</a></li>
                    <li><a href="#" className="tabs_a "> month</a></li>
                    <li><a href="#" className="tabs_a"> year</a></li>
                </ul>
            </div>
        </div>


        </div>
    </>
}

export default RecentOrder;