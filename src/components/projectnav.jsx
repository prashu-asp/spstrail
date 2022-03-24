import React, { Component } from 'react';
import {projects}  from './projects';
import CardList from './CardList';
import './blognav.css';
import SearchBox from  '../components/SearchBox';


class ProjectNav extends React.Component {
    

    state = {
        mainprojects : projects,
        dupprojects : [],
        searchfield : ''
    }
   
    alllShow = () => {
        let newprojects = this.state.mainprojects
        
        this.setState({dupprojects : newprojects})
    }


    mlShow = () => {
        let newprojects = this.state.mainprojects
        newprojects = newprojects.filter( i => i.topic.includes('ML'))
        this.setState({dupprojects : newprojects})
    }

    iotShow = () => {
        let newprojects = this.state.mainprojects
        newprojects = newprojects.filter( i => i.topic.includes('IOT'))
        this.setState({dupprojects : newprojects})
    }

    webShow = () => {
        let newprojects = this.state.mainprojects
        newprojects = newprojects.filter( i => i.topic.includes('WEB'))
        this.setState({dupprojects : newprojects})
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        
    }

    render() { 
        
        const filteredprojects = this.state.dupprojects.filter(projects => {
            return projects.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        
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
                 <CardList items={filteredprojects} />
            </span>
        </div>
        );
    }
}
 
export default ProjectNav;

