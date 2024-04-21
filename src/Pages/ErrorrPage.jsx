import React from 'react';
import errorImg from '../assets/Page-not-found.svg';

function ErrorPage(){
    return(
        <div className='error-container'>
            <div>
            <img className="error-img" src={errorImg} alt="Error:404"/>
            <h1>404! Page Not Found</h1>
            <p>Oops!Looks like you've stumbled upon a page that does'nt exist.</p>
            </div>
            
        </div>
    )
}

export default ErrorPage;