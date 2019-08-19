import React from "react";
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

export default class ItemsComponent extends React.Component {
    state = {};

    showAlert = () => {
        const alert = Modal.alert;
        const alertInstance = alert('', '确认要删除吗？', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确认', onPress: () => console.log('ok') },
        ]);
        setTimeout(() => {
            // 可以调用close方法以在外部close
            console.log('auto close');
            alertInstance.close();
        }, 500000);
    };

    componentWillReceiveProps(newProps) {
        let cid = new URLSearchParams(newProps.location.search).get('cid');
        this.setState({ cid });
    }

    render() {
        return (
            <div>
                <div>商品详情页面{this.state.cid}</div>
                <Button onClick={this.showAlert}>customized buttons</Button>
            </div>
        );
    }
}