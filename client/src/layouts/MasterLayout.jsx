import React from 'react';
import logo from "../assets/logo.jpeg";

const MasterLayout = (props) => {
    return (
        <>
            <section className="py-5 border-b px-5">
                <img src={logo} alt="logo" className=''/>
            </section>
            {props.children}
        </>
    );
};

export default MasterLayout;