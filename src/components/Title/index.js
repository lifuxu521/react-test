import React,{Component} from 'react';
import './index.scss';
class Header extends Component{
//   constructor(props){
//      super(props);
//      this.state = {      //定义数据
       
//      }  
//   }
   render(){
      return (
         <div className="title-info">
            { this.props.text }
         </div>
      )
   }
}
export default Header