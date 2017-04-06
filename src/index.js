//Create a new component
// output some HTML
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC4VxdaRFB3nnGcSB56E8KaPYjCBvK7akE';


class App extends Component{
    constructor(props){ // constructor is always has props as parameters. 
        super(props);
        
        this.state = { videos: [] }; //This is going to be an array with object inside. Video info.

        YTSearch({
    key: API_KEY, 
    term: 'Persona 5'}, (videos) => {
        this.setState({ videos })
        //this.setState ({videos: videos})
    });

    }
    render(){
    return (
    <div>
        <SearchBar />
        <VideoDetail  video={this.state.videos[0]}/> 
        <VideoList videos = {this.state.videos}/>
        
    </div>
    );
    }  
}
// Take this component's generated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

