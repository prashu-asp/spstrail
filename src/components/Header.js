import React,{ Component } from 'react';
import "./Header.css";
import Logo from '../images/logobg.png'

class Header extends Component {
    render() {
        return  ( <div className='head'>
            
                <img className='team' src={Logo} />
                
                <h2 className='body-text1'>{this.props.name}</h2>
                
            
        
         </div>   
        );
    }
}




export default Header;