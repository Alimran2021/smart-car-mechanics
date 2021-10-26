import React from 'react';
import './Experts.css'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';
const Experts = () => {
    const [experts, setExperts] = useState()

    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div id="experts" className="sub-container my-5">
            <h2 className="text-info mb-4 text-center">EXPERT ENGENEER</h2>
            {/* <div className="row"> */}

            <Row xs={1} md={3} sm={2} className="g-4">
                {
                    experts?.map(expert => <Expert expert={expert}></Expert>)
                }
            </Row>
            {/* </div> */}
        </div>
    );
};

export default Experts;