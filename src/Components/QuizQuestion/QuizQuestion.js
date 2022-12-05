import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Options from '../Options/Options';
import { useState } from 'react';
import { toast } from 'react-toastify';


const QuizQuestion = ({LoadQuestion}) => {
    const [Show, setShow] = useState(false)
    
    
    const {question,options,correctAnswer} = LoadQuestion;
    


    //get select data
    const OptionHandel = (option) =>{
         
        if(option === correctAnswer){
            setShow(false)
           
            
            toast.success('🦄Wow your select correct    option', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            
    
        }
        else {
            setShow(true)
            toast.error('your select incorrect option!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }); 

           
            
            
        }
    }
    
    
        
    return (
        <div>
        <div className='col-md-12 '>
        
        <div className="card shadow-lg p-3">
        <div className=" card-header d-flex justify-content-between">
        <h4 ><span className='text-danger'>Question:</span> {question}</h4>
        <button className='btn' onClick={()=>setShow(!Show)}> {Show ? <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>}  </button>
        </div>
        <div className="card-body">
        <div className="card-title">
        <h5><small className='text-secondary' >Options:</small></h5>
        <div className="row m-3">
        {
            options.map(option => <Options key={option} option={option} OptionHandel={OptionHandel} correctAnswer={correctAnswer}></Options>)
            
        }
        
        </div>
        
        
        <p><strong> {Show  ? <span>Correct answer is: <span className='text-success'>{correctAnswer}</span></span> :<span></span>}</strong></p>
        
        </div>
        </div>
      </div>
            
        </div>
        </div>
        
    );
};

export default QuizQuestion;