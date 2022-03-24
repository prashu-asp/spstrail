import React  from 'react';
import Scr1 from '../images/Scr1.jpg'
import Scr2 from '../images/Scr2.jpg'
import Scr3 from '../images/Scr3.jpg'
import Scr4 from '../images/Scr4.jpeg'
import Scr5 from '../images/Scr5.jpeg'
import Scr6 from '../images/Scr6.jpeg'
import Scr7 from '../images/Scr7.jpeg'
import Scr8 from '../images/Scr8.jpg'
import Scr9 from '../images/Scr9.jpeg'
import Scr10 from '../images/Scr10.jpeg'
import './card.css'
const Card = (props) => {

   
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img style={{height :200 , width : 200}} alt='photo' src={Scr1} />
            <div>
                <a href="#" className={props.name.length <= 20 ? 'smallname' : 'bigname'}>{props.name.slice(0,23)}</a><br />
                <a href="#" className={props.name.length <= 20 ? 'smallname' : 'bigname'}>{props.name.slice(23,46)} </a><br />
                <a href="#" className={props.name.length <= 20 ? 'smallname' : 'bigname'}>{props.name.slice(46,69)} </a>
                <p>{props.email}</p>
            </div>
        </div>
    );
}






export default Card;

