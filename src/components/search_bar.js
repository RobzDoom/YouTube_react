import React, {Component} from 'react';

class SearchBar extends Component{
    constructor (props){
        super(props);
        this.state = { //Only time we will ever see this is to manipulate state. 
            term: ''
        }
    }
    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
    //Every Component that is class based, MUST have a render method. 
    render (){
        return( 
        <div className= 'search-bar'>    
            <input 
            value ={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
        )
    }
}

export default SearchBar;