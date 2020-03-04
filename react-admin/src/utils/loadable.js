// 路由懒加载的封装
import Loadable from 'react-loadable';
import  React,{Fragment} from 'react'
// 创建过度组件 在组件没有加载完成的状态显示
 function Loading (){
   return(
     <div style={{width:'100vw',height:'100vh',background:'red'}}>
       这里是过度组件
     </div>
   )
 }


export default (AsyncComponet)=>{

  const LoadableComponent = Loadable({
    // 需要懒加载的组件
    loader: AsyncComponet,//() => import('./Set.js'),
    // 过度组件
    loading: Loading,
  });
   
  return ()=>{
     return(<LoadableComponent></LoadableComponent>)
  }
}