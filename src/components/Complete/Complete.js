import React, { useEffect } from 'react';
import StatusCard from '../../Card/StatusCard';
import { TaskListByStatus } from '../../APIRequest/APIRequest';
import { useSelector } from 'react-redux';
import SearchCard from '../../Card/SearchCard';

const Complete = () => {
     
    const completeTaskList = useSelector((state)=>state.task.complete)
    
    console.log(completeTaskList)
    useEffect(()=>{

        TaskListByStatus('completed')

    },[])

   
    
    return (
<div className="">
      <SearchCard></SearchCard>
<div className='row p-0 m-0'>
           {

              completeTaskList.map((item)=><StatusCard item={item}  btnName="completed" bgBtn="btn-success"></StatusCard>)

            }
            
        </div>


</div>
       
     
    );
};

export default Complete;