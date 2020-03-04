import React, { Component } from 'react';
import styles from './login.module.less'
import  {UserLogin} from  '../../api/user'
import {setItem} from '../../utils/webStorage'
import {Card,Form,Input,Icon,Checkbox,Button,message} from 'antd'
class Login  extends Component{
login=()=>{
  let {getFieldsValue,validateFields}=this.props.form
  validateFields((err,data)=>{
   console.log(err,data)
   //err 前端的字段验证 true 不通过 null 没问题
   if(err) return  message.error('输入有误,请重试!',1)
   //字段验证ok 继续向下
   let {userName,passWord} =data
   UserLogin(userName,passWord)
   .then((res)=>{
     console.log('then',res)
     setItem('token',res.token)
     setItem('uid',res.uid)
     setItem('rootIds',res.rootList)
     message.success('登录成功，1s后跳转首页',1,()=>{
       this.props.history.replace('/admin/home')
     })
   })
   .catch((err)=>{
     message.error('登录失败请重试',1)
   })
  })
  // let result =getFieldsValue()
  // console.log(result)
}
render() {
  let {getFieldDecorator} = this.props.form
  return (
    <div className={styles.login}>
      <Card  title='用户登录' className={styles['login-card']}>
        <Form.Item>   
          {getFieldDecorator('userName',{
            rules: [{ required: true, message: '用户名不能为空!' },
                    { min:3, message: '用户名不能小于3位字符!' },
                    { max:9, message: '用户名不能大于9位字符!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="Username"
            />
          )}  
        </Form.Item>
        <Form.Item>   
          {getFieldDecorator('passWord',{
            rules:[{required:true,message:'用户密码不能为空'}]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}  
        </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" onClick={this.login}>
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
        </Card> 
    </div>
  );
}
}
// Form.create 是一个函数 返回一个高阶组件 
// 将antd表单相关的api挂载到 props的form里
export default Form.create()(Login) ;
