import React, { Component } from 'react';
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <div className='whole'>
                <br />
                <a href="#" class="fa fa-facebook"></a>&nbsp;&nbsp;
                <a href="#" class="fa fa-instagram"></a>&nbsp;&nbsp;
                <a href="#" class="fa fa-linkedin"></a><br />
                <h4>ieeesps@vit.ac.in</h4>
                <h3>©2020 by SignalsProcessingSociety</h3>
                <h4>Proudly Created by SPS team</h4>
                <br />
                </div>
            </div>
        );
    }
}

export default Footer;