import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import qs from 'querystring';
import {
    message,
    Spin,
} from 'antd';
import { Cookies } from '../../../type/index.d.ts';
import * as homeActions from '../../../redux/actions/home'
import store from '../../../redux/store/Store'
import { Dispatch, AnyAction, bindActionCreators } from 'redux'
import * as actionTypes from '../../../redux/constants/actionTypes';
import * as Api from '../../../api/api';
class Test2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentWillUnmount() { }

    render() {
        return (
            <div>
                <h1>Tip2</h1>
            </div>
        )
    }

}
const mapState = (state) => ({
    home: state.home
});
const mapDispatchToProps = (dispatch) => {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    }
}
export default connect(mapState, mapDispatchToProps)(Test2);