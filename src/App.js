import React from "react";
import "./styles.css";
import Header from "./components/vHeader";
import Domains from "./components/Domains";
import { BrowserRouter as Router } from "react-router-dom";
import Events from "./components/vevents" ;
import BlogsArticles from "./components/vblogs"

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
      </Router>
      <Domains/>
      <Events/>
      <BlogsArticles/>
    </div>
  
  );
}
export default App;
