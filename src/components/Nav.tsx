import React from 'react';
import { User } from "../models/users";

const Nav = (props: {user: User|null}) => {
    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>

                <ul className='my-2 my-md-0 mr-md-3'>
                    <a href='#' className='p-2 text-white text-decoration-none'></a>
                    <a href='#' className='p-2 text-white text-decoration-none'>Sign out</a>
                </ul>
            </header>
        </div>
    );
};

export default Nav;