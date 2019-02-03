import React,{Component,Fragment} from 'react';
import Header from '../component/header';
export default class PublicLogin extends Component{
    render(){
        let {props,pro}=this.props;
        return(
            <Fragment>
                <Header bool={false} defaultProps={false} props={props} pro={pro}/>
                <div id='login'>
                    <h1></h1>
                    <div className='loginBg'>
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        )
    }
}