import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const removeService = id => {
        const proceed = window.confirm('Are you sure delete this item?')
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('This item has been deleted')
                        const result = services.filter(service => service._id !== id)
                        setServices(result)
                    }
                })
        }

    }
    return (
        <div>
            <h1>Hello manageservice</h1>
            {
                services.map(service => <div className="text-center">
                    <img src={service.img} alt="" />
                    <h1>{service.name}</h1>
                    <button onClick={() => removeService(service._id)} className="btn btn-danger">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;