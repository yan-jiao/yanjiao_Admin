import React ,{Component,Fragment}from 'react'
import {HashRouter,NavLink,Route,Redirect,Switch}  from 'react-router-dom'
import loadable from  '../utils/loadable'
import Login from '../pages/Login/Login'
import Admin from  '../pages/Admin/Admin'
import Home from  '../pages/Home/Home'
// import Setting from '../pages/Set/Set' 
import Setting from  '../pages/Set/SetLoad' 
import GoodsList from '../pages/Goods/List/List'
// import GoodsAdd from  '../pages/Goods/Add/Add'
const GoodsAdd = loadable(() => import('../pages/Goods/Add/Add'))
class AppRouter extends Component{
  render(){
    return(
      <HashRouter>
        {/* link */}
        <NavLink to='/login'></NavLink>
        {/* route */}
        <Switch>
          <Redirect exact from ='/' to='/admin/home'></Redirect>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                <Switch>
                  <Redirect exact from ='/admin' to='/admin/home'></Redirect>
                  <Route path='/admin/home' component={Home}></Route>
                  <Route path='/admin/setting' component={Setting}></Route>
                  <Route path='/admin/goods/list' component={GoodsList}></Route>
                  <Route path='/admin/goods/add' component={GoodsAdd}></Route>
                </Switch>
              </Admin>
            )
          }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default AppRouter