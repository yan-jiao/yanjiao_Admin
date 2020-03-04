import React ,{Component}from 'react';
import { Menu, Icon } from 'antd';
import  {Link} from 'react-router-dom'
import MenuItem from 'antd/lib/menu/MenuItem';
const { SubMenu } = Menu;
let menuData=[
    {
      name:'首页',
      icon:'home',
      path:'/admin/home',
      id:'0'
    },
    {
      name:'设置',
      icon:'setting',
      path:'/admin/setting',
      id:'1'
    },
    {
      name:'商品管理',
      icon:"",
      path:'',
      id:'2',
      children:[
        {
          name:'商品列表',
          id:'2-0',
          children:[
            {
              name:'商品列表1',
              id:'2-0-0'
            },
            {
              name:'商品列表2',
              id:'2-0-1',
              children:[
                {
                  name:'商品列表21',
                  id:'2-0-1-0'
                }
              ]
            }
          ]
        },
        {
          name:'商品添加',
          id:'2-1'
        }
      ]
    }
]
class SliderNav extends Component{
  // 渲染 一级菜单
  renderItem(data){
    //需要渲染item的数据
    //  没有数据渲染返回暂无数据
    if (!data.length) return '暂无数据'
    let result=data.map((item)=>{
        if(item.children){
          return( <SubMenu title={
            <span>
              <Icon type={item.icon||'home'}></Icon>
              <span>{item.name||'🙃'}</span>
            </span>
          }>
                     {this.renderItem(item.children)}
                     {/* submenu里也可能有1级菜单  
                         所以在执行一遍渲染一级菜单的函数
                     */}
                  </SubMenu>)
        }else{
        return (
          <Menu.Item>
            <Link to={item.path||'/admin'}>
              <span>
                <Icon type={item.icon||'home'}></Icon>
                <span>{item.name||'🙃'}</span>
              </span>
            </Link>
          </Menu.Item>
        )
        }
    })
    return result
  }
  render(){
    return(
      <Menu  mode="vertical" theme='dark'>
        {this.renderItem(menuData)}
        {/* {menuData.map((item,index)=>{
          if(item.children){
            // 有子菜单 多级
            return (
              <SubMenu title={item.name}>
                  {item.children.map((cItem)=>{
                  return(<Menu.Item>{cItem.name}</Menu.Item>)
                  })}
              </SubMenu>
            )
          }else{
            // 一级返回 ITEM
            return(
              <Menu.Item>
                 {item.name}
              </Menu.Item>
            )
          }
        })}    */}
      </Menu>
    )
  }
}

export default SliderNav;
