import React, { Fragment, useEffect } from 'react';
import StatusCard from '../../Card/StatusCard';
import { TaskListByStatus } from '../../APIRequest/APIRequest';
import { useSelector } from 'react-redux';
import SearchCard from '../../Card/SearchCard';


const Cancel = () => {

  const cancelList = useSelector((state)=>state.task.cancel)
    
    

  useEffect(()=>{
   
    TaskListByStatus("cancelled")
   
  },[])
    return (

       <Fragment>

         <SearchCard></SearchCard>
           
       
                
                <div className='row p-0 m-0' >

                {
                    cancelList.map((item,i)=>
       
                     <StatusCard key={i.toString()} item = {item} btnName="cancelled" bgBtn="btn-danger"> </StatusCard>
       
       
                     )

                    }
                    

                </div>
                

               
                


             


             
          

         
    
               


       
         

      </Fragment>
      
    );
};

export default Cancel;