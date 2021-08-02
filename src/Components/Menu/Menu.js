import React from "react";
import {NavLink} from "react-router-dom";
import {isAuth} from '../../data/auth';

const Menu = () => {
    return (
        <div>
            {
                isAuth &&
                <NavLink to='/profile'>Profile</NavLink>
            }
            {
                !isAuth &&
                <NavLink to='/login'>login</NavLink>
            }
            <br/>
            <NavLink to='/users'>users</NavLink>
        </div>
    );
}

export default Menu;