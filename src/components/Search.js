import React from 'react'

class Search extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
            search : "male",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // Computed property name
        this.setState({ [event.target.name] : event.target.value})
        this.props.search(this.state.search)
    }

    render(){

        return(
            <div className="container pt-5 pb-3">
            <form>
                <input on type="text" name="search" value={this.state.search} onChange={this.handleChange} />
            </form>
            </div>
        )
    }
}

export default Search;