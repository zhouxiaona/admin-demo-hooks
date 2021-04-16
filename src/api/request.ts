/**
 * @description 数据请求模块，轻度封装fetch
 * @author raziel
 * @since 19/05/23
 */
import 'whatwg-fetch'
import qs from 'querystring'
import Loading from '../components/Loading'
import { message } from 'antd';
import { Cookies } from '../type/index.d';

// 接口baseUrl
let baseUrlConfig: any = {
    "development": '',
    "production": 'http://xxx'
}
const baseUrl = baseUrlConfig[process.env.NODE_ENV]

interface params {
    url: string,
    data: any,
}

export async function request(props: params) {
    Loading.open()
    return fetch(
        baseUrl + props.url,
        {
            method: 'POST',
            headers: {
                'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: qs.stringify(props.data),
            credentials: 'include',
        }).then((response: Body) => {
            return response.json()
        }).then((res: any) => {
            Loading.close()
            if (res.code === 0) {
                Cookies.remove("userdata")
                window.location.href = 'https://xxx&callback_url=' + window.location.origin
            } else {
                return res;
            }
        }).catch(function (err: string) {
            if (err) {
                console.log('api error, HTTP CODE: ' + err)
                return
            }
        })
}
export async function requestFrom(props: params) {
    Loading.open()
    return fetch(
        baseUrl + props.url,
        {
            method: 'POST',
            body: props.data,
            credentials: 'include',
        }).then((response: Body) => {
            return response.json()
        }).then((res: any) => {
            Loading.close()
            if (res.code === 0) {
                Cookies.remove("userdata")
                window.location.href = 'https://xxx&callback_url=' + window.location.origin
            } else {
                return res;
            }
        }).catch(function (err: string) {
            if (err) {
                console.log('api error, HTTP CODE: ' + err)
                return
            }
        })
}
export async function requestJSON(props: params) {
    Loading.open()
    return fetch(
        baseUrl + props.url,
        {
            method: 'POST',
            headers: {
                'Content-Type': "application/json;charset=UTF-8"
            },
            body: JSON.stringify(props.data),
            credentials: 'include',
        }).then((response: Body) => {
            return response.json()
        }).then((res: any) => {
            Loading.close()
            if (res.code === 0) {
                Cookies.remove("userdata")
                window.location.href = 'xxx&callback_url=' + window.location.origin
            } else {
                return res;
            }
        }).catch(function (err: string) {
            if (err) {
                console.log('api error, HTTP CODE: ' + err)
                return
            }
        })
}