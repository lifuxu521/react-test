import React,{Component} from 'react';
import Title  from '../Title/index';
import './index.scss';
class Footer extends Component{
  constructor(){
     super();
     this.state = {      //定义数据
       value: '123'
     }
     this.data = {     // 自定义数据
        a: '0000000000'
     }  
  }
  handleClick() {
   this.setState({value: '12345667890987654321'});
   this.data.a =  '123456';
  }
  render(){
      return (
         <div className="footer" onClick={() => this.handleClick()}>
             <div className="footer-title">
                <Title text='Design & Develop by Mr.li Welcome to suggest'></Title>
             </div> 
             
         </div>
      )
   }
}
export default Footer