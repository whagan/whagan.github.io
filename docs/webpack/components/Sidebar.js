import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../assets/css/sidebar.css';

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
  class Sidebar extends
    React.Component {
      constructor(props) {
        super(props);
        this.state = {
          items: sidebarItems,
          show: false,
          subs: [],
          
        };
        this.show = this.show.bind(this);
      }
      show(subs) {
        if (this.state.show)  {
          this.setState({ show: false })
        }
        else  {
          this.setState({ show: true, subs: subs })
        }
      };
    
      render()  {
        return (
        <div class="menu">
        <ul id ="sidebar" class="sidebar">
        <ul>

            { this.state.items.map((item, index) => (
            <li key={index}>
                <a onClick={() => this.show(item.subs)} className="menu-btn">
                    {item.title}
                    <span className="fas fa-caret-down"></span>
                </a>
                {(this.state.show && item.subs === this.state.subs) ? (
                <ul className="submenu">
                    { this.state.subs.map((sub, index) => (
                    <li key={index}>
                        <a>{ sub }</a>
                    </li>
                    ))}
                  </ul>) : (  null  )
                 }
            </li>
      ))}
      </ul>
      </ul>
      </div>);
      } 
    }
    export default Sidebar;
  
  