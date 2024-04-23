import React, {useEffect, useState} from 'react';
import Sidebar from "../layouts/Sidebar.jsx";
import MasterLayout from "../layouts/MasterLayout.jsx";

const [food, setFood] = useState({});


useEffect(() => {
    (async () => {
        const fetchedData = await axios.get('/')
    })()
}, []);


const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const title = data.get('title');
    const code = data.get('code');
    const img = data.get('img');
    const category = data.get('category');
    const qty = data.get('qty');
    const price = data.get('price');
    console.log(title, code, img, category, qty, price);
}

const UpdatePage = () => {
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
                                <input required={true} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="title" id="title"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="code">
                                Food code
                                <input required={true} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" name="code" id="code"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="img">
                                Food image
                                <input required={true} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="img" id="img"/>
                            </label>
                        </div>
                        <div className='flex gap-2'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="category">
                                Food category
                                <input required={true} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="category" id="category"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="qty">
                                QTY
                                <input required={true} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" name="qty" id="qty"/>
                            </label>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="price">
                                Price
                                <input required={true} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" name="price" id="price"/>
                            </label>
                        </div>
                        <input type="submit" className='cursor-pointer bg-purple-700 py-2 px-3 rounded text-white' value="Update"/>
                    </form>
                </div>
            </div>
        </MasterLayout>
    );
};

export default UpdatePage;