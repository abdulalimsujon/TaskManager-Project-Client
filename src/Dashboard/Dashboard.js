import React, { useEffect } from 'react';
import { TaskStatusCount } from '../APIRequest/APIRequest';
import { useSelector } from 'react-redux';




const Dashboard = () => {

    const statusCount = useSelector((state)=>state.summary.value)


useEffect(()=>{

    TaskStatusCount();

},[])

    return (
        <div className="row m-0 p-0">

            {
                statusCount.map((item)=>{
          return(

            <div className="col-12 col-md-4 col-lg-4 col-sm-6 p-2 ">
                   <div className="card h-100">
    
                      <div className="card-body">
                            <h5 className='animated animated fadeInUp'>{item._id}</h5>
                            <h6 className='text-secondary animated fadeInUp'>{item.sum}</h6>
                      </div>
   
                    </div>
             </div>

          )
                                   
                })
            }


        </div>
  
    );
};

export default Dashboard;