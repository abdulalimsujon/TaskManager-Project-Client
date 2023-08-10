import React, { useEffect } from 'react';
import StatusCard from '../../Card/StatusCard';
import { TaskListByStatus } from '../../APIRequest/APIRequest';
import { useSelector } from 'react-redux';

const Progress = () => {
    const progressTaskList = useSelector((state)=>state.task.progress)


    useEffect(()=>{
        TaskListByStatus("progress")

    },[])
   



    return (
     
        <div className='row p-0 m-0'>

            {
                progressTaskList.map((item,i)=><StatusCard key={i.toString()} item = {item}btnName="progress" bgBtn="btn-primary"></StatusCard>)   
            }


          
        </div> 
    );
};

export default Progress;