import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faCartPlus} from "@fortawesome/free-solid-svg-icons";
import CreatePage from "../pages/CreatePage.jsx";

const Sidebar = () => {
    return (
        <div className='sideBar h-screen w-48 bg-green-50 p-5'>
            <h3 className='text-2xl mb-3 uppercase tracking-wide'>Menu</h3>
            <ul className={'list-none mt-8'}>
                <li className='mb-4'>
                    <NavLink to='/create-food' className='flex gap-2 align-middle'>
                        <FontAwesomeIcon icon={faCartPlus}/>
                        Create Food
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className='flex gap-2 align-middle'>
                        <FontAwesomeIcon icon={faList}/>
                        All Foods
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;