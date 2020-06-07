import React, { Component } from 'react'
import header_user_img from './img/header_user_logo.png'


class Header_user extends Component{
    render(){
        return(
            <div className="header_user">
                <div className="header_user_test">userName</div>
                <div className="header_user_img">
                    <img src={header_user_img} alt="user_logo"/>
                </div>
            </div>
        )
    }
}

export default Header_user;