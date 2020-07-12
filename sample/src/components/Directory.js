import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import DirectoryControls from './DirectoryControls'
import EmployeeTable from './EmployeeTable'

const Directory = () => {

    const [employees, setEmployees] = useState([]);
    const [sortObj, updateSort] = useState({field: "name", order: "dsc"});
    const [filterObj, updateFilter] = useState({name:""});
    const [filteredEmployees, updateFilteredEmployees] = useState([]);

    //Get some random employees on page load
    useEffect(() => {
        fetch('https://randomuser.me/api?results=50').then(res => res.json()).then(json => {
            console.log(json)
            setEmployees(json.results);
        })
    }, []);

    //Update filtered employees whenever something changes
    useEffect(() => {
        console.log(filterObj);
        
        let newEmployees = employees

        if(newEmployees.length && filterObj.name){
            newEmployees = newEmployees.filter(employee => {
                return (employee.name.first.toLowerCase().includes(filterObj.name.toLowerCase()));
            })
        }

        if(newEmployees.length && sortObj){
            newEmployees = newEmployees.filter(employee => {
                return (employee.name.first.toLowerCase().includes(filterObj.name.toLowerCase()));
            })
        }

        updateFilteredEmployees(newEmployees);
    }, [employees, sortObj, filterObj])





    return (
        <div className="container">
            <DirectoryControls updateFilter={updateFilter}/>
            <EmployeeTable employees={filteredEmployees} />
        </div>
    );
};

export default Directory;