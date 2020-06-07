import React, { Component } from 'react'
import aside_social_img from './img/social-1.jpg'


class Aside_social extends Component{
    render(){
        return(
            <div className="aside_social">
                <div className="aside_social_item">
                    <div className="aside_social_img">
                    </div>
                    <div className="aside_social_inner">
                        <a  href="" className="aside_social_name">цифровой прорыв</a>
                        <div className="aside_social_discription">онлайн хакатон</div>
                    </div>
                    <div className="aside_social_subscribe">
                        <div className="aside_social_subscribe_mark"></div>
                        <span className="aside_social_subscribe_col">4200</span>
                    </div>
                </div>

                </div>
        )
    }
}


export default Aside_social;