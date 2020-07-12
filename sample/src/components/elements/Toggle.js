import React from 'react';

function Toggle({label, change}) {
    return (
        <div className="custom-switch">
            <input type="checkbox" id="switch" value="" onChange={change}/>
            <label htmlFor="switch">{label}</label>
        </div>
    )
}

export default Toggle;