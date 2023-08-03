import { Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';

const Create = () => {
    return (
        <Container fluid = {true} className='content-body'>
            <Row className='d-flex justify-content-center'>

                <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">

                    <div className="card">
                        <div className="card-body">
                            <h4>Create New</h4>
                            <br/>

                            <input placeholder='Task Name' className='form-control animated fadeInUp mb-3' type="text"></input>
                            <textarea rows={5} placeholder='Task description' className='form-control animated  fadeInUp '>

                            </textarea>

                            <br/>

                            <button className='btn float-end btn-primary'>
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