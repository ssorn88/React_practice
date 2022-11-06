import React from 'react';

function Clock(props) {
    return (
        <div>
            <h1>Hi,React!</h1>
            <h2>Time : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;