import React,{Component,createRef} from 'react';
import Header from '../../common/component/header';
import Course from './course';
 import Meun from '../../common/component/menu';
import Features from '../../common/component/features';
import StudentsWork from '../../common/component/StudentsWork';
let arrImg=[require('../../common/img/tab/img1.png'),require('../../common/img/tab/img2.png'),require('../../common/img/tab/img3.png'),require('../../common/img/tab/img4.png'),require('../../common/img/tab/img1.png')]
var i=0;
var timer=null;
export default class Home extends Component{
    constructor(props){
        super(props);
        this.Div=createRef();
    }
    componentDidMount(){
        let _this=this;
        timer=setInterval(function(){
           if(i===-30)
           {
               i=0;
               _this.Div.current.style.cssText=`left:${i}rem;transition:none`
               
           }
           else{
               i-=7.5;
               _this.Div.current.style.cssText=`left:${i}rem;transition:1s`
               
           }
        },1000)
    }
    componentWillUnmount(){
        clearInterval(timer);

    }
    render(){
        let y=arrImg.map(item=>{
            return <img src={item} alt=''key={Math.random()}/>
        })
        let{name,click}=this.props;
        return(
            <div>
               <Header click={(e)=>{click(e)}} name={name} bool={true} defaultProps={true}/>
               <Meun/>
               <div className='box'>
                    <div className='box-wai'>
                        <div className='box-wai-i clear' ref={this.Div}>
                            {y}
                        </div>
                    </div>
               </div>
               <Course/>
               <div className='GuideLanguage'>
                    <h3>注册成为 妙味会员</h3>
                    <div className='GuideLanguageText'>
                        <span>即可观看妙味历年来超值的实体课程内容。感受正统的前端开发课程体系、体验超值的海量实战实例,</span>
                        <span>凝聚妙味全体讲师知识精华，尽在妙味VIP!</span>
                        <strong>仅需￥199元</strong>
                        <a href='javscript:;'>立即报名</a>
                    </div>
               </div>
                <Features/>
                <StudentsWork/>
            </div>
        )
    }
}