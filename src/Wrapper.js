import React from "react";
import Users from "./Components/Users/Users";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Login from "./Components/Login/Login";

const Wrapper = () => {
    return (
        <div>
            <Menu/>

            <Route path="/login" render={() => <Login/>}/>
            <Route path="/profile" render={() => <Profile/>}/>
            <Route path="/users" render={() => <Users/>}/>

        </div>
    );
}

export default Wrapper;