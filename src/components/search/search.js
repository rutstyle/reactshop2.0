import React from "react";
import { Modal } from 'antd-mobile';
import Css from "./search.css";
import { connect } from "react-redux";
import actions from "../../actions";

class SearchComponent extends React.Component {
    state = {
        hideHistory: this.props.hk.keywords.length <= 0
    };
    historyKeywords = this.props.hk.keywords;

    componentWillReceiveProps(newProps) {
        this.setState({ hideHistory: newProps.hk.keywords.length <= 0 })
    }

    showAlert = () => {
        const alert = Modal.alert;
        const alertInstance = alert('', '确认要删除吗？', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            {
                text: '确认', onPress: () => {
                    this.setState({ hideHistory: true });
                    localStorage.removeItem('hk');
                    this.historyKeywords = [];
                    this.props.dispatch(actions.hk.addHistoryKeywords(this.historyKeywords));
                    this.searchInput.value = "";
                }
            },
        ]);
        setTimeout(() => {
            // 可以调用close方法以在外部close
            console.log('auto close');
            alertInstance.close();
        }, 500000);
    };

    addHistoryKeywords() {
        let value = this.searchInput.value;
        this.historyKeywords = this.historyKeywords.filter(x => x !== value);
        this.historyKeywords.unshift(value);
        localStorage['hk'] = JSON.stringify(this.historyKeywords);
        this.props.dispatch(actions.hk.addHistoryKeywords(this.historyKeywords));
    }

    render() {
        return (
            <div style={this.props.pageStyle} className={Css['page']}>
                <div className={Css['search-bar']}>
                    <span className={Css['icon-close-page']} onClick={this.props.childStyle.bind(null, "123")}>X</span>
                    <input type="text" ref={input => this.searchInput = input} className={Css['search-input']} />
                    <input type="button" value="搜索" onClick={this.addHistoryKeywords.bind(this)} />
                </div>
                <div className={this.state.hideHistory ? "hide" : ""}>
                    <div>最近搜索<i className={Css['delete-history']} onClick={this.showAlert}></i></div>
                    <ul>
                        {
                            this.props.hk.keywords.map((x, index) =>
                                <li key={index}>{x}</li>
                            )
                        }
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

export default connect(state => {
    return state;
})(SearchComponent);