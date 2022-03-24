import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class HomeNav extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Link to='/'>Home</Link>&nbsp;&nbsp;
                <Link to='/blogs'>Blogs</Link>&nbsp;&nbsp;
                <Link to='/projects'>Projects</Link>&nbsp;&nbsp;
                <Link to='/events'>Events</Link>&nbsp;&nbsp;

            </div>
        );
    }
}
 
export default HomeNav;


