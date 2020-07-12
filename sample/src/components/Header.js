import React from 'react';

import Toggle from './elements/Toggle';

function Header({darkModeToggle}) {

    

    return (
        <nav className="navbar justify-content-between">
            <div className="navbar-content">
                
                <h1><i className="fas fa-address-book"></i> Employee Directory</h1>
            </div>
            <div className="navbar-content">
                <Toggle label={<i className="fas fa-moon"></i>} change={darkModeToggle}/>
            </div>
        </nav>
    );
}

export default Header;