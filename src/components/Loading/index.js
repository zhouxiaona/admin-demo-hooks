/**
 * @description loading animation methods
 * @author raziel
 * @since 19/05/23
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd';
import './index.styl'

class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            off: false
        }
    }

    open = () => {
        this.setState({
            off: true
        })
    }

    close() {
        this.setState({
            off: false
        })
    }

    render() {
        return (
            <div className="LoadingBox" style={this.state.off ? { display: 'block' } : { display: 'none' }}>
                <Spin size="large" style={{ display: 'block', margin: '20vh auto' }} />
            </div>
        );
    }
}

let div = document.createElement('div');
document.body.appendChild(div);
let Box = ReactDOM.render(React.createElement(
    Loading,
), div);
export default Box;
