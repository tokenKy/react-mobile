import React,{Component,Fragment} from 'react';
import {Link} from  'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import PublicLCom from '../../common/component/publicLogin';
export default class registered extends Component{
    constructor(props){
        super(props);
        this.state={
            userValue:'',
            passWordValue:'',
            ConfirmPassword:'',
            study:''
        }
        
    }
    userIn=(userInput)=>{
       
        this.setState({
            userValue:userInput.target.value
        })

    } 

    passWordIn=(passWordValueInput)=>{
       
            this.setState({
                passWordValue:passWordValueInput.target.value
            })
            
    }

    ConfirmPasswordIn=(ConfirmPasswordInput)=>{
        
            this.setState({
                ConfirmPassword:ConfirmPasswordInput.target.value
            })
    }
    studyIn=(studyInput)=>{
       
            this.setState({
                study:studyInput.target.value
            })
    }
        postResgister=()=>{
            let{userValue,passWordValue,ConfirmPassword,study}=this.state;

            axios({
                method:"POST",
                url:'https://data.miaov.com/user/register',
                data:{
                    userValue,
                    passWordValue,
                    ConfirmPassword,
                    study
                }
            })
            .then(function(res){
                console.log(res)
            })
            .catch(function(res){
                console.log(res)
            })
        }

    render(){
        let{userValue,passWordValue,ConfirmPassword,study}=this.state;
        console.log(this.props)
    return(
        <Fragment>
            <PublicLCom pro={this.props}>
                <div className='register'>
                    <h5 className='register_title'>注册账号</h5>
                    <ul className='registerInput clear'>
                        <li>
                            <em className='user'>用户名</em>
                            <input onChange={(e)=>{this.userIn(e)}}  value={userValue}/>
                        </li>
                        <li>
                            <em>设置密码</em>
                            <input onChange={(e)=>{this.passWordIn(e)}} value={passWordValue}/>
                        </li>
                        <li>
                            <em>确定密码</em>
                            <input onChange={(e)=>{this.ConfirmPasswordIn(e)}} value={ConfirmPassword}/>
                        </li>
                        <li>
                            <em>学习宣言</em>
                            <input onChange={(e)=>{this.studyIn(e)}} value={study}/>
                        </li>
                    </ul>
                    <div className='register_btn'>
                        <a href='javascript:;' onClick={this.postResgister}>马上注册</a>
                    </div>
                    <p className='register_login'>已有账号？<Link to='/login'>立即登录</Link></p>
                </div>
            </PublicLCom>
        </Fragment>
    )
    }
}