import React from 'react'
 import { FaChevronDown,FaSistrix} from "react-icons/fa6";


const Sell = () => {
  return (
    <>
    <div className="sellcont">
       <div>
       <h2>Product Sell</h2>
       </div>
       <div className='ser'>
       <div className="search ser1">
            <input type="text" placeholder='search'/>
            <span><FaSistrix/></span>
        </div>
        <h4>last 30 days <span><FaChevronDown/></span></h4>
       </div>
      </div>

      <div className='sellcont sell2'>
      <div><h3>Product Name</h3></div>
      <div className='sellspan'>
        <div>

        <span>Stock</span>
        </div>
        <div>

      <span>Price</span>
        </div>
        <div>

      <span>Total Sell</span>
        </div>
      </div>
      </div>


      <div className='sellcont sell2'>
      <div className='productlist'>
        <div className="img1">
          <img src="https://images.unsplash.com/photo-1697369975788-4c330f46b0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1" />
        </div>
        <div className="desc">
          <h5>Abstract 3D</h5>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo!</h6>
        </div>
      </div>
      <div className='sellspan'>
        <div>

        <span> 32 in Stock</span>
        </div>
        <div>

      <span> $ 45.99 </span>
        </div>
        <div>

      <span>20</span>
        </div>
      </div>
      </div>

      <div className='sellcont sell2'>
      <div className='productlist'>
        <div className="img1">
          <img src="https://images.unsplash.com/photo-1683009427500-71296178737f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img2" />
        </div>
        <div className="desc">
          <h5>Abstract 3D</h5>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo!</h6>
        </div>
      </div>
      <div className='sellspan'>
        <div>

        <span> 32 in Stock</span>
        </div>
        <div>

      <span> $ 45.99 </span>
        </div>
        <div>

      <span>20</span>
        </div>
      </div>
      </div>
</>
  )
}
export default Sell;