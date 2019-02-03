import React from 'react';
import {Link}from 'react-router-dom';
export default function Menu(){
    return (
        <div id='Move'>
             <div id='leftNav'>
            </div>
            <nav id='menu'>
                    <div className='HomePage clear'>
                        <i className='iconfont icon-aui-icon-home'></i>
                        <Link to='/'>首页</Link>
                    </div>
                    <div className='curriculum clear'>
                    <i className='iconfont icon-kechengbiao'></i>
                        <Link to='/course'>课程安排</Link>
                    </div>
                    <div className='lecturerTeam clear'>
                        <i className='iconfont icon-jiangshi'></i>
                        <Link to='/lecturer'>讲师团队</Link>
                    </div>
            </nav>
        </div>
    )
}