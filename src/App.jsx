import React, { Component } from "react";

import Search from './components/Search'; 	//search bar, search, results, and clear button/link 	//search.jsx 	//search.css
import List from './components/List'; 	//results list, search results, and clear button/link 	//list.jsx 	//list.css
import './App.css'; 		//CSS-Files importable from the root of the page.

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Search/> 
          <List/>
          
        </div>
      </div>
    );
  }
}

export default App;
