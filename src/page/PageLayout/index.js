import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as homeActions from '../../redux/actions/home'
import { Dispatch, AnyAction, bindActionCreators } from 'redux'
import * as actionTypes from '../../redux/constants/actionTypes';
import * as Api from '../../api/api';
import { Cookies } from '../../type/index.d.ts';
import { DownOutlined } from '@ant-design/icons';
import MainRouter from '../../components/MainRouter'
import CustomMenu from '../../components/CustomMenu'
import {
    Layout,
    Menu,
    Dropdown,
} from 'antd';
import './index.styl'
const MenuItem = Menu.Item
const { Header, Content, Sider, Footer } = Layout;
const PageLayout = (props) => {
    // 退出登录，清除用户信息
    const loginOut = () => {
        Cookies.remove("userdata")
        window.location.href = 'https://api.service.100tal.com/sso/logout?path=https://www.zhiyinlou.com'
    }

    const menu = () => {
        return (
            <Menu>
                <MenuItem>
                    <div
                        className="loginOut"
                        onClick={loginOut}
                    >
                        退出登录
                </div>
                </MenuItem>
            </Menu>
        );
    }

    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Header className="header">
                    <div>Na.Chow.CMS</div>
                    <Dropdown overlay={menu}>
                        <a
                            className="ant-dropdown-link"
                            onClick={e => e.preventDefault()}
                        >
                            工号：{props.home.userdata.workCode || JSON.parse(Cookies.get('userdata')).workCode}&nbsp;
                            姓名：{props.home.userdata.name || JSON.parse(Cookies.get('userdata')).name}&nbsp;
                            <DownOutlined />
                        </a>
                    </Dropdown>
                </Header>
                <Layout>
                    <Sider>
                        <CustomMenu />
                    </Sider>
                    <Layout style={{ padding: '24px 24px' }}>
                        <Suspense>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: "0 auto",
                                    minHeight: 800,
                                    minWidth: 1200,
                                    width: "100%",
                                }}
                            >
                                <MainRouter />
                            </Content>
                        </Suspense>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by SHXES</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    )
}

const mapState = (state) => ({
    home: state.home
});
const mapDispatchToProps = (dispatch) => {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    }
}
export default connect(mapState, mapDispatchToProps)(withRouter(PageLayout));
