import React from 'react';
import './Statistics.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export const data = {
    labels: ['React', 'JavaScript', 'CSS', 'Git'],
    datasets: [
      {
        label: '# of Votes',
        data: [8, 9, 8, 11],
        backgroundColor: [
          '#0088FE',
          '#00C49F',
          '#FFBB28',
          '#FF8042'

        ],
        borderWidth: 1,
      },
    ],
  };
ChartJS.register(ArcElement, Tooltip, Legend);
const Statistics = () => {
    
    
    return (

        <div className='container'>
            <h1 className='text-center text-info my-5'> This is Quiz Topic Chart</h1>
        <div className="container pie"> <Doughnut data={data} /></div>
           
        </div>
        
    );
};

export default Statistics;