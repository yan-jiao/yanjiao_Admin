import React, { Component, Fragment } from 'react';
import { Layout, Icon ,Modal} from 'antd';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
import styles from  './admin.module.less'
import SliderNav from  '../../components/SilderNav/SliderNav'
import HeaderNav from '../../components/HeaderNav/HeaderNav'

const { Header, Sider, Content,Footer } = Layout;
class Admin extends Component{
  render () {
    console.log(this)
    let {tokenModal,setTokenModal} = this.props
    return (
      <Fragment>
      <Layout className={styles.admin}>
        <Sider  collapsed={false}>
          <SliderNav></SliderNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              />
            <HeaderNav></HeaderNav>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
            >
          {this.props.children}
          </Content>
          <Footer>这里是底部</Footer>
        </Layout>
      </Layout>
      {/* 模态框 */}
      <Modal
        title='11'
        visible={tokenModal}
        onOk={()=>{
          this.props.history.replace('/login')
          setTokenModal(false)
        }}
        onCancel={()=>{
          setTokenModal(false)
        }}
      >
         token失效，请重新登录！
      </Modal>
      </Fragment>
  );
}
}
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(withRouter(Admin))
