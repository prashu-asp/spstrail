import React, { Component } from 'react';
import Header from './Header';
import ProjectNav from './projectnav';
import Footer from './footer';


class ProjectsPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header name="Projects" />
                <ProjectNav />
                <Footer />
            </div>
        );
    }
}
 
export  default ProjectsPage;