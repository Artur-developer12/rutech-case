import React, { Component } from 'react'
import './aside.css'
import Aside_social from './Aside_social'


class Aside extends Component{
    render(){
        return(
            <aside className="aside">
                    <h2 className="aside_title">Сообщества</h2>
                    <div className="aside_inner">
                        <Aside_social/>
                        <Aside_social/>
                    </div>
            </aside>
        )
    }
}


export default Aside