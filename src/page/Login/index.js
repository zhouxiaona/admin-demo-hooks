import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import qs from 'querystring';
import {
    message,
} from 'antd';
import { Cookies } from '../../type/index.d';
import * as homeActions from '../../redux/actions/home'
import store from '../../redux/store/Store'
import { Dispatch, AnyAction, bindActionCreators } from 'redux'
import * as actionTypes from '../../redux/constants/actionTypes';
import * as Api from '../../api/api';
import './index.styl'

const Login = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            let url = window.location.search.replace('?', '')
            let urlObj = qs.parse(url)
            let token = ''
            if (urlObj.token) {
                token = urlObj.token
                console.log(urlObj, '--urlObj--has token--')
            } else {
                // window.location.href = "https://sso.100tal.com/portal/login/688151456"
                console.log(urlObj, '--urlObj--no token--')
                return message.error('请去登录获取token')
            }

            const { code, data, msg } = await Api.adminLogin(token)
            if (code != 1) return message.error(msg)
            // 存储用户工号和姓名
            console.log(data, '--接口返回的用户信息--')
            // 存储用户信息---***
            store.dispatch(
                {
                    type: actionTypes.SAVE_USERDATA,
                    data: {
                        ...data
                    }
                }
            )
            // 打印用户信息--***
            props.history.push("/")
        }
        fetchData()
    }, [])
    return null;
}

const mapState = (state) => ({
    home: state.home
});
const mapDispatchToProps = (dispatch) => {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    }
}
export default connect(mapState, mapDispatchToProps)(Login);