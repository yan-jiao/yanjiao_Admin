import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Line extends Component{
  constructor(){
    super()
    this.state={
      option: {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'},
        {data: [1, 933, 91, 34, 1290, 130, 320],
        type: 'line'},
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
      }
        
  ]
}
    }
  }
  render(h) {
    return(
      <div style={{width:'300px',height:'300px'}} >
        <h3>周访问数据</h3>
        <ReactEcharts option={this.state.option}></ReactEcharts>
      </div>
    )
  }
}
export default Line;
