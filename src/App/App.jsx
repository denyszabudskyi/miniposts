import React from "react";
import Users from "../components/Users";
import './App.css';

const App = () => {
    return (
        <div className={'app'}>
            <div className={'side-bar'}>
                <a href="#" className="side-bar__item">Home</a>
                <a href="#" className="side-bar__item">Users</a>
                <a href="#" className="side-bar__item">Posts</a>
                <a href="#" className="side-bar__item">Settings</a>
            </div>
            <Users/>
        </div>
    );
}

export default App;