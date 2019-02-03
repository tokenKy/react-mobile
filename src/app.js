import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Course from './view/course/index';
import Home from './view/home/index';
import Registered from './view/registered/index';
import Login from './view/login/index';
import MessAge from './view/message/index';
import Lecturer from './view/lecturer/index';
import './common/css/style.css';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    Click=(ev)=>{
        if(document.querySelector('#leftNav').style.display==='block')
        {
            getStyle('#leftNav').style.display='none';
            getStyle('#menu').style.cssText=`left:-4.5rem;transition:1s`;
        }
        else{
            getStyle('#leftNav').style.display='block';
            getStyle('#menu').style.cssText=`left:0;transition:1s`;
        }
      function getStyle(attr)
      {
          return document.querySelector(attr)
      }
      ev.stopPropagation();
    }

    login=(userValue,passWordValue)=>{
        if(!userValue||!passWordValue)return false;
        this.setState({
            name:userValue
        })
    }


    render(){
        let{name}=this.state;
        return(
            <Switch>
                <Route exact path='/' render={
                    ()=>{
                        return <Home name={name} click={this.Click}/>
                    }
                }/>
                <Route path='/course' render={()=>{
                    return <Course click={this.Click} Element={document.querySelector('#leftNav')}/>
                }}/>
                <Route path='/registered' component={Registered}/>
                <Route exact path='/login' render={
                    (props)=>{
                        return name?<Redirect to='/' />:<Login Click={this.login} {...{props}}/>
                    }
                }/>
                <Route path='/lecturer'  render={()=>{
                    return <Lecturer click={this.Click}/>
                }}/>
                <Route path='/message' component={MessAge}/>
            </Switch>
        )
    }
}
export default App;
