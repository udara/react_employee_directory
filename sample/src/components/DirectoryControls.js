import React from 'react';

const DirectoryControls = ({updateFilter}) => {

    const filterChangeHandler = (e) => {
        updateFilter({name: e.target.value})
    }

    return (
        <div>
            <input type="text" className="form-control" placeholder="Search by name" onChange={filterChangeHandler}></input>
        </div>
    );
};

export default DirectoryControls;