import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message} from 'antd'
import {AddGood} from  '../../../api/goods'


class GoodsAdd extends Component{
  constructor(){
    super()
    this.state={
      name:'红烧肉',
      price:'998',
      img:null,//路径? 字符？
      desc:'超好吃',
      foodType:'热菜'
    }
  }
  submit=()=>{
    if(!this.state.img) return message.info('请先上传图片')
    AddGood(this.state)
    .then(()=>{message.success('添加ok',1)})
    .catch((err)=>{ message.error('添加失败',1)})
  }
  upload=()=>{
    // 获取图片 
    
    let file = this.refs.file.files[0]
    if(!file) return message.info('请先选择图片')
    // 创建文件读取对象
    let reader = new FileReader()
    // 将图片读成base64 
    reader.onload=()=>{
      console.log('文件转化结束',reader.result)
      this.setState({img:reader.result})
    }
    reader.readAsDataURL(file)
  }
  render(){
    let {name,price,img,foodType,desc} = this.state
    return (
      <div>
         name: <input type='text' value={name} 
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          />
          <br/>
          price: <input type='text' value={price} 
          onChange={(e)=>{
            this.setState({price:e.target.value})
          }}
          />
          <br/>
          foodType: <input type='text' value={foodType} 
          onChange={(e)=>{
            this.setState({foodType:e.target.value})
          }}
          />
          <br/>
          desc: <input type='text' value={desc} 
          onChange={(e)=>{
            this.setState({desc:e.target.value})
          }}
          />
          <br/>
          缩略图: <input type='file' ref='file'/>
          <img widht='100' height='100' src={img} alt=""/>
          <button onClick={this.upload}>上传图片</button>
          
          <br/>

          <Button type='primary' onClick={this.submit}>提交</Button>
      </div>
    );
  }
}
/*
 图片上传 
   用formdata上传图片 数据库存的是图片路径 参考 node图片上传
     a.调用接口上传图片  返回图片在服务器的相对路径  
     b.调用添加接口 将图片路径与其他数据保存的数据库  
   base64 数据库存的是图片的base64数据
     a.调用添加接口   将图片变成base64后就相当于一个字符串
  
*/
export default GoodsAdd;
