import React ,{Component}from 'react';
import { Menu, Icon } from 'antd';
import  {Link} from 'react-router-dom'
const { SubMenu } = Menu;
class SliderNav extends Component{
  render(){
    return(
      <Menu  mode="vertical" theme='dark'>
           <Menu.Item key="1">
            <Link to='/admin/home'>
             <span>
             <Icon type="home" />
              首页
             </span>
           </ Link>
           </Menu.Item>
           <SubMenu title={
             <span>
               <Icon type='mail'></Icon>
               <span>商品管理</span>
             </span>
           }>
               <Menu.Item >商品列表</Menu.Item>
               <Menu.Item >商品添加</Menu.Item>
               <SubMenu title='hehe'>
                <Menu.Item >heh1</Menu.Item>
                <Menu.Item >heh2</Menu.Item>
               </SubMenu>
           </SubMenu>
           <Menu.Item key="2">
            <Link to='/admin/setting'>
             <span>
             <Icon type="setting" />
             设置
             </span>
             </Link>
           </Menu.Item>
      </Menu>
    )
  }
}

export default SliderNav;
