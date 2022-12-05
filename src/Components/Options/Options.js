import React from 'react';
import './Options.css'

const Options = ({option , OptionHandel}) => {


        
    
    return (
        <div className='col-md-6 col-lg-6 col-sm-1 my-3'>
        <div className="form-check  " >
            <input className="form-check-input" onClick={()=>OptionHandel(option) } value={option} type="radio" name="flexRadioDefault" id={option} />
            <label id={option} className="form-check-label" htmlFor={option}>
                {option}
            </label>
        </div>
        </div>
        
    );
};

export default Options;