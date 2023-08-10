import React from 'react';

const SearchCard = () => {
    return (
        <div className='d-flex speace-between'>

                <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>Task Canceled</h5>
                </div>

            
               <div className="col-12 col-md-6 col-lg-4 px-2 float-end">

             <div className="row">
                   <div className="col-8">
                    <input className='form-control w-100'></input>

              </div>
            <div className="col-4">
                      <button className="btn btn-primary w-100">Search</button>
              </div>
   

</div>

</div>
        </div>
    );
};

export default SearchCard;