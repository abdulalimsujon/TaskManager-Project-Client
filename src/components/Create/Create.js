import { Row } from 'antd';
import axios from 'axios';
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { getToken } from '../../helper/SessionHelper';
import { ErrorToast, SuccessToast } from '../../helper/formHelper';

const Create = () => {

  
   let TaskRef,DescriptionRef,statusRef = useRef();

   const AxiosHeader={headers:{"token":getToken()}}
      

  const onCreateTask=async()=>{
    const title = TaskRef.value
    const description = DescriptionRef.value
    const status = statusRef.value



    let url = "http://localhost:5000/api/v1/createTask";
    const reqBody = {title:title,description:description,status:status}

    const { data} = await axios.post(url,reqBody,AxiosHeader);

    if(data?.error){
        ErrorToast(data.error)
    }else{
        SuccessToast("Successfully task created")
    }


  }



    return (
        <Container fluid = {true} className='content-body'>
            <Row className='d-flex justify-content-center'>

                <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">

                    <div className="card">
                        <div className="card-body">
                            <h4>Create New</h4>
                            <br/>

                            <input ref={(input)=>TaskRef=input} placeholder='Task Name' className='form-control animated fadeInUp mb-3' type="text"></input>
                            <input ref={(input)=>statusRef=input} placeholder='Task status' className='form-control animated fadeInUp mb-3' type="text"></input>
                            <textarea ref={(input)=>DescriptionRef=input} rows={5} placeholder='Task description' className='form-control animated  fadeInUp '>

                            </textarea>

                            <br/>

                            <button onClick={onCreateTask} className='btn float-end btn-primary'>
                                create
                            </button>


                        </div>
                    </div>

                </div>


            </Row>

        </Container>
       
    );
};

export default Create;