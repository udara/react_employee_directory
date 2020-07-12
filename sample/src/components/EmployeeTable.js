import React from 'react';

import TableRow from './TableRow'

function EmployeeTable({employees}){
    return (
        <table className="table table-striped">
  <thead>
    <tr>
      <th>Avatar</th>
      <th>Name</th>
      <th>Age</th>
      <th className="text-right">Country</th>
    </tr>
  </thead>
  <tbody>
        {employees.map((employee, i) => <TableRow employee={employee} key={i}/>)}
  </tbody>
</table>
    );
}

export default EmployeeTable;