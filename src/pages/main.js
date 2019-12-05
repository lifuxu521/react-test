//Header.js用来写入UI代码
import React,{Component} from 'react';
import Header from '../components/Header/Header';//引入一个普通页面
import Content from '../components/Content/Content';//引入一个普通页面
import Footer from '../components/Footer/index';//引入一个需要路由的页面
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
      <div className="body-box">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
      </div>  
      )
   }
}
export default page