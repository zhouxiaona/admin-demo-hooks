/*
 * @Author: tankswift
 * @Date: 2020-05-09 13:01:09
 * @LastEditors: tankswift
 * @LastEditTime: 2020-06-05 15:34:20
 * @Description: 文件描述
 * @FilePath: \workSpace\admin_demo\src\redux\store\Store.ts
 */
import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import { appReducer } from '../reducers'
import { Cookies } from '../../type/index.d'
import createLogger from 'redux-logger'

function saveDate({ getState }: any) {
  return (next: any) => (action: any) => {

    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action)
    if (action.type === 'SAVE_USERDATA' || action.type === 'UPDATA_USERDATA') {

      Cookies.set('userdata', JSON.stringify(getState().home.userdata), { expires: 3 });
    }
    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk, saveDate, createLogger),
  )
);

export default store
