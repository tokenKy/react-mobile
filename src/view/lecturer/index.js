import React,{Component,createRef} from 'react';
import Header from  '../../common/component/header';
import Meun from '../../common/component/menu';
import Footer from '../../common/component/footer';
import Li from '../../common/component/li';
var g=[1,3,4];
var i=0;
let timer=null;
export default class Lecturer extends Component{
    constructor(props){
        super(props);
        this.Div=createRef();
    }
    componentDidMount(){
        let _this=this;
        timer=setInterval(function(){
            if(i===-15)
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
        clearInterval(timer)
    }
    render(){
        let{click}=this.props;
        return(
            <div>
                <Header click={(e)=>{click(e)}} defaultProps={true} bool={true}/>
                <Meun/>
                <div className='h'>
                    <div className='na'>
                        <i></i>
                        <div className='naMove' ref={this.Div}>
                            <ul className='lect'>
                            {g.map(item=><Li/>)}
                            </ul>
                            <ul className='lect'>
                            {g.map(item=><Li/>)}
                            </ul>
                            <ul className='lect'>
                            {g.map(item=><Li/>)}
                            </ul>
                        </div>
                        <div className='li'>
                                <a href='javascript:;'></a>
                                <a href='javascript:;'></a>
                            </div>
                    </div>
                </div>
                <p className='join'>加入我们</p>
                <ul className='lecturer-Wid clear'>
                    <li className='Wid_o'>
                        <span>new</span>
                        <h4>WEB讲师</h4>
                        <i>人数:人数不限,多多益善</i>
                        <i>薪资:面议</i>
                    </li>
                    <li className='Wid_o'>
                        <span>new</span>
                        <h4>WEB讲师</h4>
                        <i>人数:人数不限,多多益善</i>
                        <i>薪资:面议</i>
                    </li>
                </ul>
                <Footer/>
            </div>
        )
    }
}