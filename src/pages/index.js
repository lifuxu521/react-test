//Header.js用来写入UI代码
import React,{Component} from 'react';
import './index.css';
class page extends Component{
  constructor(){
     super();
     this.state = {      //定义数据
       text: '',
     }  
  }
   render(){
      return (
         <div className="page-box">
            你好欢迎来到另外的世界
         </div>
      )
   }
}
export default page