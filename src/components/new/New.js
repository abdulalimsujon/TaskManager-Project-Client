import React, { useEffect } from 'react';
import StatusCard from '../../Card/StatusCard';
import { useSelector } from 'react-redux';
import { TaskListByStatus } from '../../APIRequest/APIRequest';
import SearchCard from '../../Card/SearchCard';

const New = () => {

    const newTaskList = useSelector((state)=>state.task.new)
   


    useEffect(()=>{

        TaskListByStatus('new')

    },[])
    return (
        <div className="">
            <SearchCard></SearchCard>

<div className='row p-0 m-0'>
             

             {
                newTaskList.map((item,i)=><StatusCard id={i.toString()} item={item} btnName="new" bgBtn="btn-success"></StatusCard>)
             }



             
        </div>

        </div>
       
    );
};

export default New;