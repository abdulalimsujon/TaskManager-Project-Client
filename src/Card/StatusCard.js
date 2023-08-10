import React, { Fragment } from 'react';
import { AiOutlineCalendar, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import { DeleteAlert } from '../helper/deleteAlert';
import { TaskListByStatus } from '../APIRequest/APIRequest';
import { UpdateAlert } from '../helper/UpdateAlert';


const StatusCard = (props) => {

    const {title,description,_id,status,createDate} = props.item

    const onDelete =(_id)=>{
        DeleteAlert(_id).then((res)=>{
            if(res===true){
            
                TaskListByStatus(props.btnName)
            }
        })

        
    }

    const onUpdate =(id,status)=>{
        UpdateAlert(id,status).then((res)=>{
            if(res===true){
                TaskListByStatus(props.btnName)
            }
        })
    }

    return (
        <Fragment >
     
                <div className="col-12 col-md-4 col-lg-4 col-sm-6 p-2 ">

                <div className="card h-100">
                        <div className="card-body">
                            <h6 className='animated fadeInUp pt-2'>{title}</h6>
                            <p className='animated fadeInUp pt-2'>{description}</p>
                            <p> <p className="m-0 animated fadeInUp p-0">
                                            <AiOutlineCalendar/> 
                                            <a   className="icon-nav text-primary mx-1"><AiOutlineEdit/>{createDate}</a>
                                            <a onClick={onDelete.bind(this,_id)} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                            <a onClick={onUpdate.bind(this,_id,status)}className={`badge float-end ${props.bgBtn}`}>{props.btnName}</a>
                                        </p></p>
                        </div>

                    </div>

                </div>
 
       </Fragment>
    );
};

export default StatusCard;