import React, {useState} from 'react';
import Sidebar from "../layouts/Sidebar.jsx";
import MasterLayout from "../layouts/MasterLayout.jsx";
import axios from 'axios'

const CreatePage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const tagName = document.getElementById('name');
        const tagCode = document.getElementById('code');
        const tagImg = document.getElementById('img');
        const tagCategory = document.getElementById('category');
        const tagQty = document.getElementById('qty');
        const tagPrice = document.getElementById('price');

        const data = new FormData(form);
        const name = data.get('name');
        const code = data.get('code');
        const img = data.get('img');
        const category = data.get('category');
        const qty = data.get('qty');
        const price = data.get('price');
        await axios.post('/api/v1/create-food',{name, code, img, category, qty, price})
            .then(res => {
                tagName.value = '';
                tagCode.value = '';
                tagImg.value = '';
                tagCategory.value = '';
                tagQty.value = '';
                tagPrice.value = '';
            })
            .catch(err => console.log(err));
    }

    return (
        <MasterLayout>
            <div className='createPage flex'>
                <div className='w-48'>
                    <Sidebar/>
                </div>
                <div className='createFood p-16'>
                    <h2 className='text-2xl'>Create food item</h2>
                    <form onSubmit={handleSubmit} className=''>
                        <div className='flex gap-2 my-5'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">
                                Food name
                                <input required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="text" name="name" id="name"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="code">
                                Food code
                                <input required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="number" name="code" id="code"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="img">
                                Food image
                                <input required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="text" name="img" id="img"/>
                            </label>
                        </div>
                        <div className='flex gap-2'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="category">
                                Food category
                                <input required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="text" name="category" id="category"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="qty">
                                QTY
                                <input required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="number" name="qty" id="qty"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="price">
                                Price
                                <input required={true}
                                       className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                       type="number" name="price" id="price"/>
                            </label>
                        </div>
                        <input type="submit" className='cursor-pointer bg-purple-700 py-2 px-3 rounded text-white'
                               value="Submit"/>
                    </form>
                </div>
            </div>
        </MasterLayout>
    );
};

export default CreatePage;