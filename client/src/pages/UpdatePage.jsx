import React, {useEffect, useState} from 'react';
import Sidebar from "../layouts/Sidebar.jsx";
import MasterLayout from "../layouts/MasterLayout.jsx";
import {useParams} from "react-router-dom";
import axios from "axios";


const UpdatePage = () => {
    const {id} = useParams();
    let [form, setForm] = useState({});

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        try {
            const response = await axios.put(`/api/v1/update-food/${id}`, form);
            console.log(response.data);
        } catch (error) {
            console.error('Error updating food:', error);
        }
    };


    return (
        <MasterLayout>
            <div className='createPage flex'>
                <div className='w-48'>
                    <Sidebar/>
                </div>
                <div className='createFood p-16'>
                    <h2 className='text-2xl'>Update food item</h2>
                    <form onSubmit={handleSubmit} className=''>
                        <div className='flex gap-2 my-5'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">
                                Food name
                                <input onChange={handleChange} required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="text" name="name" id="name"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="code">
                                Food code
                                <input onChange={handleChange} required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="number" name="code" id="code"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="img">
                                Food image
                                <input onChange={handleChange} required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="text" name="img" id="img"/>
                            </label>
                        </div>
                        <div className='flex gap-2'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="category">
                                Food category
                                <input onChange={handleChange} required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="text" name="category" id="category"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="qty">
                                QTY
                                <input onChange={handleChange} required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="number" name="qty" id="qty"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="price">
                                Price
                                <input onChange={handleChange} required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="number" name="price" id="price"/>
                            </label>
                        </div>
                        <input onClick={handleSubmit} type="submit"
                               className='cursor-pointer bg-purple-700 py-2 px-3 rounded text-white' value="Update"/>
                    </form>
                </div>
            </div>
        </MasterLayout>
    );
};

export default UpdatePage;