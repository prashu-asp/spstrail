import React, { Component } from 'react';
import Header from './Header';
import EventNav from './eventsnav';
import Footer from './footer';


class EventsPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header name="Events" />
                <EventNav />
                <Footer />
            </div>
        );
    }
}
 
export  default EventsPage;