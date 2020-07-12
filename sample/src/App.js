import React,{useState} from 'react';
import './assets/css/App.css';

import Header from './components/Header'
import Directory from './components/Directory'

function App() {

    const [darkMode, setDarkmode] = useState(false);

    const darkModeToggle = (e) => {
        console.log(e.target.checked)
        setDarkmode(e.target.checked)
    }


    return (
        <div className={`page-wrapper ${darkMode?"dark-mode":""}`}>
            <div className="content-wrapper">
            <Header darkModeToggle={darkModeToggle}/>
            <Directory/>

            </div>
        </div>
	);
}

export default App;
