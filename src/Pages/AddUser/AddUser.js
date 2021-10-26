import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";



const AddUser = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('service added successfull')

                }
            })

    }
    return (
        <div className="text-center">
            <h1>Add a user</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-25 mb-2" {...register("name", { required: true, maxLength: 20 })} placeholder="name" /> <br />
                <textarea className="w-25 mb-2" {...register("description")} placeholder="description" /> <br />
                <input className="w-25 mb-2" type="number" {...register("price")} placeholder="price" />  <br />
                <input className="w-25 mb-2" {...register("img")} placeholder="img" /> <br />
                <input className="w-25 mb-2" type="submit" />
            </form>
        </div>
    );
};

export default AddUser;