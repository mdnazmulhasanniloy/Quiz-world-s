import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useState } from 'react';
import TopicCard from '../TopicCard/TopicCard';

const Topics = () => {
    const Topics = useLoaderData();
    const LoadTopics = Topics.data;
    
    return (
        <div className='container'>
        <div className="text-center my-5">
        <h1>Welcome to the Quiz world’s.</h1>
        <h4>Start Quiz test and Check your ability</h4>
        </div>
        <div className="row g-4">
        {
            LoadTopics.map(topic => <TopicCard key={topic.id} topic={topic}></TopicCard>)
        }
        </div>
        </div>
    );
};

export default Topics;