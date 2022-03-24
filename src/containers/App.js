import React, { Component } from "react";
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';

import { blogs } from '../components/blogs';
import Header from '../components/Header';
import Blognav from '../components/blognav';
import Footer from '../components/footer';
import bg from '../images/bg.jpg'
import BlogsPage from "../components/blogsPage";
import Home from "../components/Home";
import {Routes , Route} from 'react-router-dom'
import ProjectsPage from "../components/projectspage";
import EventsPage from "../components/eventspage";

class App extends React.Component {
    render() {
        return (
            <div className="tc">
            <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/blogs' element={<BlogsPage />}></Route>
                    <Route path='/projects' element={<ProjectsPage />}></Route>
                    <Route path='/events' element={<EventsPage />}></Route>
            </Routes>
            </div>
        );
    }
}

export default App;