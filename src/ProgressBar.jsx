import React from 'react'
import './Progressbar.css';

const ProgressBar = ({ progress }) => {
    return (
        <div className='progressbar'>
            <div className='progress' style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar