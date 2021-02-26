import React from 'react';
import Header from './Header';
import Menu from './Menu';
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"


const App = () => {
    return (
        <div className='container jumbotron'>
            <Header/>
            <Menu/>
        </div>
    );
};

export default App;