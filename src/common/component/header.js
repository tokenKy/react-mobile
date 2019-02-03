import React,{Component} from 'react';
import{Link} from 'react-router-dom';
export default class Header extends Component{
    Change=()=>{
        let{props,pro}=this.props;
       props?props.props.history.go(-1):pro.history.go(-1)
    }
    render(){
        let{click,name,bool,defaultProps}=this.props;
        return(
            <div id='header'>
               <div className='header-Wid  clear'>
                   <div className='Wid-left'>
                        {defaultProps?<a href='javascript:;' className='iconfont icon-xitongcaidan' onClick={click}></a>:<a href='javascript:;' className='iconfont icon-back' onClick={this.Change} ></a>}
                   </div>
                   <div className='Wid-Image'>
                        <img src={require('../img/logo.png')} alt=''/>
                   </div>
                   {bool?<div className='Wid-right'>
                        {name?<span>{name}</span>:<Link to='/login' className='iconfont icon-denglu'></Link>}
                   </div>:null}
               </div>
            </div>
        )
    }
}