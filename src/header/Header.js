import React, { Component } from 'react'
import './heade.css'
import Header_logo from './Header_logo'
import Header_search from './Header_search'
import Header_notifications from './Header_notifications'
import Header_btn from './header_btn'
import Header_user from './header_user'


class Header extends Component {

    render(){
        return(
            <header className="header">
                 <Header_logo/>
                 <Header_search/>
                 <div className="header_group">
                    <Header_notifications/> 
                    <Header_btn/>
                    <Header_user/>
                 </div>
            </header>
        )
    }
}

export default Header