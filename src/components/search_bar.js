import React, {Component} from 'react';

class SearchBar extends Component{
    constructor (props){
        super(props);
        this.state = { //Only time we will ever see this is to manipulate state. 
            term: 'Type Here'
        }
    }
    //Every Component that is class based, MUST have a render method. 
    render (){
        return( 
        <div>    
            <input 
            value ={this.state.term}
            onChange={event => this.setState({ term: event.target.value })}/>
        </div>
        )
    }
}

export default SearchBar;