import React, { Component } from 'react'
import Logo from './img/emerge_log.png'


class Header_logo extends Component{
    render(){
        return (
            <div className="header_logo">
                <img className="heheader_logo_img" src={Logo} alt="logo"/>
            </div>
        )
    }
}

export default Header_logo;