//Create a new component
// output some HTML
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyC4VxdaRFB3nnGcSB56E8KaPYjCBvK7akE';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}
// Take this component's generated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

