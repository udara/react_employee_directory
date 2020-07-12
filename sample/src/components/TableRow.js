import React from 'react';

const TableRow = ({ employee }) => {

    return (
        <tr>
            <th><img src={employee.picture.thumbnail} alt={`Picture of ${employee.name.first}`} /></th>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.dob.age}</td>
            <td className="text-right">{employee.location.country} <img src={`https://www.countryflags.io/${employee.nat}/flat/16.png`}></img></td>
        </tr>
    );
};

export default TableRow;