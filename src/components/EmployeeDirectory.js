import React from 'react';
import Header from './Header';
import Search from './Search';
import EmployeeTable from './EmployeeTable';
import axios from 'axios';

class EmployeeDirectory extends React.Component{
    
    constructor(props){

        super(props);
        this.state = { employees : [] , search:""}
        this.search = this.search.bind(this);
    }

    search(searchKeyword)
    {
        this.setState({search:searchKeyword})
    }

    async componentDidMount(){
        let response = await axios.get('https://randomuser.me/api/?results=200')
        this.setState({employees : response.data.results, search : ''});
    }

    render(){
        return(
        <div>
           <Header/>
           <Search search={this.search}/>
           <EmployeeTable employees={this.state.employees} search={this.state.search} />
        </div>
        )
    }
}

export default EmployeeDirectory;