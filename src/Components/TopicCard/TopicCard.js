import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './TopicCard.css'
import { Link } from 'react-router-dom';

const TopicCard = ({topic}) => {
    const {id, logo, name ,total} = topic;
    console.log(logo)
    return (
        <div className='col-lg-3 col-md-3 col-sm-12'>
        <div className="card p-2 shadow-lg" style={{width: 'auto'}}>
        <img src={logo} className="card-img-top img rounded " alt="..." />
        <div className="card-body d-flex justify-content-between">
          <div><h5 className="card-title">{name}</h5>
          <p className="card-text">Total : {total}</p>
          </div>
          <div className="d-flex d-flex align-items-end">
          <div></div>
          <Link href="#" className="btn btn-primary" to={`/${name}/${id}`}>Start Quiz <FontAwesomeIcon icon={faArrowRightLong} /></Link>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default TopicCard;