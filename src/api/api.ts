import { request, requestJSON } from './request'
import { Cookies } from '../type/index.d';
import qs from 'querystring';
import store from '../redux/store/Store'
import { Dispatch, AnyAction } from 'redux'
import * as actionTypes from '../redux/constants/actionTypes';

// 管理员登录
export async function adminLogin(token: string) {
    return request({
        url: `/admin/login`,
        data: { token }
    });
}









