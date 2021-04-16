import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import qs from 'querystring';
import {
    message,
    Spin,
    Button,
} from 'antd';
import * as homeActions from '../../redux/actions/home'
import store from '../../redux/store/Store'
import { Dispatch, AnyAction, bindActionCreators } from 'redux'
import * as actionTypes from '../../redux/constants/actionTypes';
import * as Api from '../../api/api';

class Hidden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        return (
            <div>
                <Button
                    type='primary'
                    onClick={() => {
                        this.props.history.push('/Test1/Tip1')
                    }}
                >/Test1/Tip1---Hidden</Button>
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
export default connect(mapState, mapDispatchToProps)(Hidden);