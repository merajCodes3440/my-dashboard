import React from 'react'
import { FaStackpath,FaAngular,FaAngleRight,FaPiedPiperPp,FaUsers,FaFileCirclePlus,FaPercent,FaHireAHelper,FaChevronDown} from "react-icons/fa6";

const Aside = () => {
  return (
    <div className='aside'>
      <div className='logo'>
        <h2><FaStackpath/></h2>
        <h2>Dashboard</h2>
      </div>

      <div className='logo btn'>
         <h2><FaAngular/></h2>
        <h2>Dashboard</h2>
      </div>
      <div className="btn1"> 
         <div className='hbtn'>
         <h2><FaPiedPiperPp/></h2>
        <h2>Product</h2>
         </div>
         <div>
            <FaAngleRight/>
         </div>
      </div>

      <div className="btn1"> 
         <div className='hbtn'>
         <h2><FaUsers/></h2>
        <h2>Customers</h2>
         </div>
         <div>
            <FaAngleRight/>
         </div>
      </div>

      <div className="btn1"> 
         <div className='hbtn'>
         <h2><FaFileCirclePlus/></h2>
        <h2>Income</h2>
         </div>
         <div>
            <FaAngleRight/>
         </div>
      </div>

      <div className="btn1"> 
         <div className='hbtn'>
         <h2><FaPercent/></h2>
        <h2>Promote</h2>
         </div>
         <div>
            <FaAngleRight/>
         </div>
      </div>

      <div className="btn1"> 
         <div className='hbtn'>
         <h2><FaHireAHelper/></h2>
        <h2>Help</h2>
         </div>
         <div>
            <FaAngleRight/>
         </div>
      </div>

      <div className="profile">
            <div className="up">
            <div className="img">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="img" />
            </div>
            <div>
                <h4>Evano</h4>
                <h5>Product Manager</h5>
            </div>
            </div>
            <div className="low">
              <FaChevronDown/>
            </div>
         </div>
    </div>
  )
}
export default Aside;
