import React, { Component } from 'react';
import {blogs}  from './blogs';
import CardList from './CardList';
import './blognav.css';
import SearchBox from  '../components/SearchBox';


class Blognav extends React.Component {
    

    state = {
        mainBlogs : blogs,
        dupBlogs : [],
        searchfield : ''
    }
   
    alllShow = () => {
        let newblogs = this.state.mainBlogs
        
        this.setState({dupBlogs : newblogs})
    }


    mlShow = () => {
        let newblogs = this.state.mainBlogs
        newblogs = newblogs.filter( i => i.topic.includes('ML'))
        this.setState({dupBlogs : newblogs})
    }

    iotShow = () => {
        let newblogs = this.state.mainBlogs
        newblogs = newblogs.filter( i => i.topic.includes('IOT'))
        this.setState({dupBlogs : newblogs})
    }

    webShow = () => {
        let newblogs = this.state.mainBlogs
        newblogs = newblogs.filter( i => i.topic.includes('WEB'))
        this.setState({dupBlogs : newblogs})
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        
    }

    render() { 
        
        const filteredblogs = this.state.dupBlogs.filter(blogs => {
            return blogs.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        
        })
        
        
        return (
        <div >
            <span className='bodymain'>
                 <br/>
                 <br/>
                 <button onClick={this.alllShow} className='button button1'>ALL</button> &nbsp;&nbsp;
                 <button onClick={this.mlShow} className='button button2'>ML</button> &nbsp;&nbsp;
                 <button onClick={this.iotShow} className='button button3'>IOT</button> &nbsp;&nbsp;
                 <button onClick={this.webShow} className='button button4'>WEB</button> &nbsp;&nbsp;
                 <br/>
                 <br />
                 <SearchBox searchChange={this.onSearchChange}/>
                 <CardList items={filteredblogs} />
            </span>
        </div>
        );
    }
}
 
export default Blognav;

