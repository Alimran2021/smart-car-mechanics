import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service
    return (
        <div className="service-cart">
            <img src={img} alt="" />
            <div className="title-body">
                <h2>{name}</h2>
                <h2>Price : ${price}</h2>
                <p>{description}</p>
                <Link to={`/booking/${_id}`}>
                    <button className="btn btn-success">Book {name}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;