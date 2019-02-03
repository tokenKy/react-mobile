import React from 'react';

export default function features(){
    return(
        <div id='features'>
                <h5 className='featuresHeader'>妙味特色</h5>
                <div className='diamond'>
                    <i className='iconfont icon-diamond'></i>
                    <span>成为VIP会员后，即刻观看'妙味VIP视屏库中任何视频'</span>
                </div>
                <div className='diamond jiangshi'>
                    <i className='iconfont icon-jiangshi'></i>
                    <span>妙味官方会不定期安排公开课,VIP会员可以零距离与讲师接触、声讨各种技术问题</span>
                </div>
                <div className='diamond feiji'>
                    <i className='iconfont icon-emizhifeiji'></i>
                    <span>“作品展示、工作推荐、举办个人技术活动、招聘”等...妙味官网会大力支持，并会在官网上大力宣传、全力协助VIP达成心愿</span>
                </div>
        </div>
    )
}