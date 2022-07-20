import React  from "react";
import TableContent from "./TableContent";

const Overview = () =>{
    return (
        <div className="OverView">
                <div className="tabs_con">
                    <div>
                        <h2>OverView</h2>
                    </div>

                    <div className="tabs_ul">
                        <ul>
                            <li> <a href="#" className="tabs_a">day</a></li>
                            <li><a href="#" className="tabs_a">week</a></li>
                            <li><a href="#" className="tabs_a active"> month</a></li>
                            <li><a href="#" className="tabs_a"> year</a></li>
                        </ul>
                    </div>
                     </div>

            <div className="table_container">
            <TableContent/>
            <TableContent/>
            </div>

         

        </div>
    )
}

export default Overview;