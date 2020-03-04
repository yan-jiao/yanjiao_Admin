import React, { Component } from 'react';
import { getItem } from '../../utils/webStorage';
import {withRouter} from 'react-router-dom'
import Pie from  '../../components/echarts/pie/pie' 
import Line from  '../../components/echarts/line/line' 
class Home extends Component{
  componentDidMount(){
    if(!getItem('token')){
        this.props.history.replace('/login')
    }
  }
  render() {
    return (
      <div style={{display:'flex'}}>
         <Pie></Pie>
        <Line></Line>
      </div>
    );
  }

}

export default withRouter(Home);
