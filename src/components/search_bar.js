import React, {Component} from 'react';

class SearchBar extends Component{
    constructor (props){
        super(props);
        this.state = {
            term: ''
        }
    }
    //Every Component that is class based, MUST have a render method. 
    render (){
        return <input onChange={event => console.log(event.target.value)}/>
    }
}

export default SearchBar;