import React from "react";
import { Modal } from 'antd-mobile';
import Css from "./search.css";

export default class SearchComponent extends React.Component {
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

    render() {
        return (
            <div style={this.props.pageStyle} className={Css['page']}>
                <div className={Css['search-bar']}>
                    <span className={Css['icon-close-page']} onClick={this.props.childStyle.bind(null, "123")}>X</span>
                    <input type="text" className={Css['search-input']} />
                    <input type="button" value="搜索" />
                </div>
                <div>
                    <div>最近搜索<i className={Css['delete-history']} onClick={this.showAlert}></i></div>
                    <ul>
                        <li>女装</li><li>裙子</li>
                    </ul>
                </div>
                <div>
                    <div>热门搜索</div>
                    <ul>
                        <li>女装</li><li>裙子</li>
                    </ul>
                </div>
            </div>
        );
    }
}