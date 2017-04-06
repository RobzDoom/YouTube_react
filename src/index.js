//Create a new component
// output some HTML

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC4VxdaRFB3nnGcSB56E8KaPYjCBvK7akE';


class App extends Component{
    constructor(props){ // constructor is always has props as parameters. 
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        }; //This is going to be an array with object inside. Video info.

        this.videoSearch('Horizon ps4')
    };
     
    videoSearch(term){
         YTSearch({key: API_KEY, term: term}, (videos) =>{
             this.setState({
                 videos: videos,
                 selectedVideo: videos[0],

             })
         })
     }
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        // created a function that will only be called once every 300 milliseconds.
    return (
    <div>
        <SearchBar onSearchTermChange ={videoSearch}/>
        <VideoDetail  video={this.state.selectedVideo}/> 
        <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
        
    </div>
    );
    }  
}
// Take this component's generated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

