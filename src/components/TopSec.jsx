import React from 'react'
import { FaSistrix,FaCommentDollar,FaArrowUp,
    FaFilePrescription , FaArrowDown} from "react-icons/fa6";
import Overview from './Overview';
import Coustomer from './coustomer';
import Sell from "./Sell";

export const TopSec = () => {
  return (
   <div className='topsec'>
    <div className='top'>
        <div className="name">
            <h1>Hello Shahrukh 👋</h1>
        </div>
        <div className="search">
            <input type="text" placeholder='search'/>
            <span><FaSistrix/></span>
        </div>
    </div>
    <div className="cards">
        <div className="card">
            <div className="icon green" >
                <h1><FaCommentDollar/></h1>
            </div>
            <div className="info">
                <div>
                <h6 className='er'>Earning</h6>
                <h4>$ 196K</h4>
                <h3><span className='gr'><FaArrowUp/> 37.5%</span>This year</h3>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="icon volet">
                <h1><FaCommentDollar/></h1>
            </div>
            <div className="info">
                <div>
                <h6 className='er'>Order</h6>
                <h4>$ 2.4K</h4>
                <h3><span className='redarrow'><FaArrowDown/> 2%</span>This Month</h3>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="icon blue" >
                <h1><FaCommentDollar/></h1>
            </div>
            <div className="info">
                <div>
                <h6 className='er'>Balance</h6>
                <h4>$ 2.4K</h4>
                <h3><span className='redarrow'><FaArrowDown/> $ 2%</span>This month</h3>
                </div>
            </div>
        </div>


        <div className="card">
            <div className="icon red" >
                <h1><FaCommentDollar/></h1>
            </div>
            <div className="info">
                <div>
                <h6 className='er'>Total Sales</h6>
                <h4>$ 89K</h4>
                <h3><span className='gr'><FaArrowUp/> 11% </span>This Week</h3>
                </div>
            </div>
        </div>
    </div>
      <div className="chart">
      <Overview/>
      <Coustomer/>
      </div>
      <Sell/>
   </div>
  ) 
}
