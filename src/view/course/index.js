import React,{Component} from 'react';
import Header from '../../common/component/header';
import Meun from '../../common/component/menu';
import Footer from '../../common/component/footer';
export default class Course extends Component{
    render(){
        let{click}=this.props;
        return(
            <div>
               <Header click={(e)=>{click(e)}} defaultProps={true}/>
                <Meun/>
                <div className='courseBg'>
                    <div className='courseTitle'>
                        <h4>一周学习安排</h4>
                        <h6>miaov team</h6>
                    </div>
                    <div className='study-Wid'>
                        <div className='study-Title'>
                            <span>星期</span>
                            <span>时间</span>
                            <span>学习内容</span>
                        </div>
                        <div className='studyContent clear'>
                            <div className='studyContent-Left'>
                                <h4>周一</h4>
                            </div>
                            <div className='studyContent-Middle'>
                                <span>上午</span>
                                <span>下午</span>
                            </div>
                            <div className='studyContent-Right'>
                                <span>前段代码初始</span>
                                <span>基本属性：背景、 边框</span>
                            </div>
                            <div className='studyContent-Left'>
                                <h4>周二</h4>
                            </div>
                            <div className='studyContent-Middle'>
                                <span>上午</span>
                                <span>下午</span>
                            </div>
                            <div className='studyContent-Right'>
                                <span>H5标签与css选择器</span>
                                <span>练习题</span>
                            </div>
                            <div className='studyContent-Left'>
                                <h4>周三</h4>
                            </div>
                            <div className='studyContent-Middle'>
                                <span>上午</span>
                                <span>下午</span>
                            </div>
                            <div className='studyContent-Right'>
                                <span>浮动的深度剖析</span>
                                <span>定位进阶</span>
                            </div>
                            <div className='studyContent-Left'>
                                <h4>周四</h4>
                            </div>
                            <div className='studyContent-Middle'>
                                <span>上午</span>
                                <span>下午</span>
                            </div>
                            <div className='studyContent-Right'>
                                <span>表单详解</span>
                                <span>表单的相关属性</span>
                            </div>
                            <div className='studyContent-Left fix'>
                                <h4>周五</h4>
                            </div>
                            <div className='studyContent-Middle g'>
                                <span>上午</span>
                            </div>
                            <div className='studyContent-Right b'>
                                <span>浏览器兼容</span>
                            </div>
                            <div className='studyContent-Left fix x'>
                                <h4>周末</h4>
                            </div>
                            <div className='studyContent-Middle m'>
                                <span>合理安排自己的时间，记得联系额</span>
                            </div>
                        </div>
                        <div className='studyFooter'>
                            <span>更详情的课程安排请点击:</span>
                            <a href='javascript:;'>www.miaov.com</a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}