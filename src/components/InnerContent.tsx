import {Outlet} from 'react-router-dom'

const  InnerContent=() =>{
  return <div className='inner-content'>
      <Outlet/>
   
  </div>;
}

export default InnerContent;
