import React from 'react';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import { useLoaderData } from 'react-router-dom';

const QuiPage = () => {
    const Loaddata = useLoaderData();
    const {questions, name } = Loaddata.data;


    
    return (
        <div className='container'>
            <h2 className='text-center text-info my-5'> <script src=""></script>
           <span id='auto-input1'></span>
            
            
            </h2>
            <div className="row g-4 ">
                {
                    questions.map(question => <QuizQuestion key={question.id} LoadQuestion={question}></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default QuiPage;