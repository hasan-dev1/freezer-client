import React from 'react';
import { Link } from 'react-router-dom';
import error from './ezgif.com-gif-maker-removebg-preview.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center flex-col items-center lg:min-h-[70vh] bg-primary'>
            <img src={error} alt="" />
            <div>
                <p className='text-accent text-2xl font-bold'>Opps! Page not Found <Link className='btn btn-secondary hover:bg-slate-600' to={'/'}>Back to Home page</Link></p>
            </div>
        </div>
    );
};

export default ErrorPage;