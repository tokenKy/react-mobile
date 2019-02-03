import React,{Component} from 'react';
export default class Footer extends Component{
    render(){
        return(
            <div id='footer'> 
                <div className='problem-Hei'>
                    <div className='problem-Hei-Wid'>
                        <div className='problem-Hei-Wid-Top clear'>
                            <div className='Wid-Top-Left'>
                                <i className='iconfont icon-youxiang'></i>
                                <span>hr_recruit@miaov.com</span>
                            </div>
                            <div className='Wid-Top-Right'>
                                <i className='iconfont icon-dianhua'></i>
                                <span>010-57269690</span>
                            </div>
                        </div>
                        <div className='optionsBar'>
                            <a href="javascript:;">首页</a>  |
                            <a href='javascript:;'>课程安排</a>  |
                            <a href='javascript:;'>学员作品</a>  |
                            <a href='javascript:;'>视频教程 </a>
                            <a href='javascript:;'>关于我们</a>  |
                            <a href='javascript:;'>在线留言</a>  |
                            <a href='javascript:;'>常见问题</a>  
                        </div>
                    </div>
                </div>
                <div className='record-Hei'>
                   <div className='record-Hei-Wid'>
                        <span>京ICP备08102442号 2007-2016 MIAOOV.CON 版权所有</span>
                   </div>
                </div>
            </div>
        )
    }
}