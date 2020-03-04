import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Pie extends Component{
constructor(){
  super()
  this.state={
    option:{
      series: [
        {
            name: '最受欢迎的早餐',
            type: 'pie',
            radius: ['30%','70%'],
            center: ['50%', '40%'],
            data:[{value: 20, name: '豆汁'},]
        }
    ]
    }
  }
}
componentDidMount(){
  setTimeout(() => {
    let data =  [
      {value: 20, name: '豆汁'},
      {value: 40, name: '豆浆'},
      {value: 30, name: '豆腐脑(甜)'},
      {value: 50, name: '豆腐脑(咸)'},
      {value: 60, name: '胶圈'}
  ] 
  let option = JSON.parse(JSON.stringify(this.state.option ))
  option.series[0].data=data
  this.setState({option},()=>{
    console.log(this)
  })
  },3000);
}
componentDidUpdate(){
  console.log('图表更新结束')
}
render() {
  console.log('图标render')
  let {option} = this.state
 return(
   <div style={{width:'300px',height:'300px',border:'1px solid #eee'}}>  
     <h3>饼图</h3>
     <ReactEcharts option={option}></ReactEcharts>
   </div>
 )
}
}
export default Pie;
