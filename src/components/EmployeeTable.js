import React from 'react';

class EmployeeTable extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="row font-weight-bold">
                <div className="col-md-3 text-bold">Name</div>
                <div className="col-md-3">Gender</div>
                <div className="col-md-3">Email</div>
                <div className="col-md-3">Phone</div>    
                </div>
               {this.props.employees.filter(
                   employee => (
                       (employee.name.first + " " +employee.name.last).includes(this.props.search) ||
                       employee.gender.includes(this.props.search) ||  
                       employee.email.includes(this.props.search) ||
                       employee.phone.includes(this.props.search)
                   )).map(employee => (
                <div className="row">
                    <div className="col-md-3">        
                        {employee.name.first} {employee.name.last}
                    </div>
                    <div className="col-md-3">        
                        {employee.gender}
                    </div>
                    <div className="col-md-3">        
                    {employee.email}
                    </div>
                    <div className="col-md-3">        
                    {employee.phone}
                    </div>   
                </div>    
                ))}
            </div>
        )
    }
}

export default EmployeeTable;