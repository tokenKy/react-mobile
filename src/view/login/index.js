import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PublicLogin from '../../common/component/publicLogin';
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            userValue:"",
            passWordValue:""
        }
    }

    userIn=(userInput)=>{
               this.setState({
                userValue:userInput.target.value
               })

    }

    passWordIn=(passWordInput)=>{
            this.setState({
                passWordValue:passWordInput.target.value
            })
    }

    render(){
        let{Click}=this.props;
        let{userValue,passWordValue}=this.state;
        console.log(this.props)
        return(
                <PublicLogin props={this.props}>
                    <div className='loginPrompt'>
                        <i className='iconfont icon-mima'></i>
                        <span>如有账号，请直接登录</span>
                        </div>
                        <div className='Login_Wid clear'>
                        <div className='Input_user'>
                            <i className='iconfont icon-youxiang'></i>
                            <input placeholder='请输入用户名'  onChange={(e)=>{this.userIn(e)}} value={userValue}/>
                        </div>
                        <div className='Input_user'>
                            <i className='iconfont icon-mima'></i>
                            <input placeholder='请输入密码'  onChange={(e)=>{this.passWordIn(e)}} value={passWordValue}/>
                        </div>
                        <div className='foot'>
                            <input type="checkbox"/>
                        <span>记住密码</span>
                        </div>
                        <div className='footRig'>
                            <Link to=''><span>忘记密码?</span></Link>
                        </div>
                        <div className='loginBtn'>
                        <a href='javascript:;' onClick={()=>{
                            Click(userValue,passWordValue)
                        }}>登录</a>
                        </div>
                        <p>没有账号？<Link to='/registered'><span>立即注册</span></Link></p>
                        </div>
                </PublicLogin>
        )
    }
}