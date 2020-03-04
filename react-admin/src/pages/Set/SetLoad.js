import Loadable from 'react-loadable';
import  React from 'react'
// 创建过度组件 在组件没有加载完成的状态显示
 function Loading (){
   return(
     <div style={{width:'100vw',height:'100vh',background:'red'}}>
       这里是过度组件
     </div>
   )
 }

const LoadableComponent = Loadable({
  // 需要懒加载的组件
  loader: () => import('./Set.js'),
  // 过度组件
  loading: Loading,
});
 
export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}