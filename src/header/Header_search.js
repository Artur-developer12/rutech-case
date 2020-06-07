import React, { Component } from 'react'
import Header_logo from './Header_logo'


class Header_search extends Component{
    render(){
        return(
            <form className="header_search">
                <input type="text" name="search" placeholder="Поиск"/>
                <button><i class="fas fa-search"></i></button>
            </form>
        )
    }
}

export default Header_search