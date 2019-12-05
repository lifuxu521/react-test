//Header.js用来写入UI代码
import React,{Component} from 'react';
// import { Button } from 'antd';
import './index.scss';
class Header extends Component{
  constructor(){
     super();
     this.state = {      //定义数据
       title: 'Welcome My World'
     }  
  }
   render(){
      return (
         <div className="header">
             <div className="header-title">{ this.state.title }</div> 
             <a href='#/admin' className="to">去另外一个世界</a>
         </div>
      )
   }
}
export default Header