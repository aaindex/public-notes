import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>Select an option below:</p>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/public">Public</Link></li>
                <li><Link to="/private">Private</Link></li>
            </ul>
        </div>
    );
};

export default Home;
