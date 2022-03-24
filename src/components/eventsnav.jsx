import React, { Component } from 'react';
import {events}  from './events';
import CardList from './CardList';
import './blognav.css';
import SearchBox from  '../components/SearchBox';


class EventNav extends React.Component {
    

    state = {
        mainevents : events,
        dupevents : [],
        searchfield : ''
    }
   
    alllShow = () => {
        let newevents = this.state.mainevents
        
        this.setState({dupevents : newevents})
    }


    mlShow = () => {
        let newevents = this.state.mainevents
        newevents = newevents.filter( i => i.topic.includes('ML'))
        this.setState({dupevents : newevents})
    }

    iotShow = () => {
        let newevents = this.state.mainevents
        newevents = newevents.filter( i => i.topic.includes('IOT'))
        this.setState({dupevents : newevents})
    }

    webShow = () => {
        let newevents = this.state.mainevents
        newevents = newevents.filter( i => i.topic.includes('WEB'))
        this.setState({dupevents : newevents})
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        
    }

    render() { 
        
        const filteredevents = this.state.dupevents.filter(events => {
            return events.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        
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
                 <CardList items={filteredevents} />
            </span>
        </div>
        );
    }
}
 
export default EventNav;

