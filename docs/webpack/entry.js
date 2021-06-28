import React, { Component } from 'react';
import {render} from 'react-dom';
import Sidebar from './components/Sidebar';
import '../assets/css/sidebar.css';


var sidebarItems = [
    {
      "title":"Leetcode",
      "url":"www.leetcode.com",
      "subs":["Leetcode A", "Leetcode B", "Leetcode C"]
      
    },
    {
      "title":"Codepen",
      "url":"codepen.io",
      "subs":["Codepen A", "Codepen B", "Codepen C"]
    },
    {
      "title":"OMSCS",
      "url":"https://omscs.gatech.edu/",
      "subs":["OMSCS A", "OMSCS B", "OMSCS C"]
    },
    {
      "title":"Reading",
      "url":"www.goodreads.com",
      "subs":["Reading A", "Reading B"]
    }
  ]

class App extends Component {
    render() {
        return (
        <Sidebar data={sidebarItems}/>
        )
    }
}

render(<App />, document.getElementById('root'));

