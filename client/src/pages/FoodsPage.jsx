import React, {useEffect, useState} from 'react';
import Sidebar from "../layouts/Sidebar.jsx";
import MasterLayout from "../layouts/MasterLayout.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const FoodsPage = () => {

    // STATE MANAGEMENT STARTS HERE
    const [foods, setFoods] = useState([]);
    let refresher = 0;
// STATE MANAGEMENT ENDS HERE

//INITIAL LOAD STARTS HERE
    useEffect(() => {
        (() => {
            axios.get('/api/v1/get-foods')
                .then((res) => {
                    setFoods(res.data);
                })
                .catch(err => console.log(err));
        })()
    }, []);
//INITIAL LOAD ENDS HERE

    const handleDelete = async (id) => {
        await axios.delete(`/api/v1/delete-food/${id}`);
        refresher++;
    }

    const navigate = new useNavigate();
    const handleUpdate = (id) => {
        navigate(`/update-food/${id}`);
    }
    // console.log(foods)

    return (
        <MasterLayout>
            <div className='createPage flex'>
                <div className='w-48'>
                    <Sidebar/>
                </div>
                <section className='createFood px-16 py-5'>
                    <h2 className='text-2xl'>All food list</h2>
                    <div className="cards my-12 grid grid-cols-2 gap-4">
                        {
                            foods.length > 0 && foods.map(food => (
                                <div className='card rounded border'>
                                    <img className='w-full mb-3' src={food['img']} alt=""/>
                                    <div className="p-5">
                                        <h2 className='text-xl font-bold mb-3'>{food['name']}</h2>
                                        <p className='bg-purple-400 text-white w-20 py-2 px-3 mb-3 rounded'>{food['price']} tk</p>
                                        <div className="buttons flex gap-2">
                                            <input onClick={() => {
                                                handleUpdate(food['_id'])
                                            }} type="submit"
                                                   className='py-2 px-3 rounded text-green-400 bg-green-100 cursor-pointer'
                                                   value="Edit"/>
                                            <input onClick={() => {
                                                handleDelete(food['_id'])
                                            }} type="submit"
                                                   className='py-2 px-3 rounded text-red-400 bg-red-100 cursor-pointer'
                                                   value="Delete"/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </MasterLayout>
    )
        ;
};

export default FoodsPage;