import React, { PureComponent } from 'react';

import { List } from 'antd';

import TxListItem from './tx-item';

export default class TransactionsPage extends PureComponent {
  state = {
    list: [],
  };

  componentDidMount() {
    const { txList } = this.props;
    this.setState({ list: txList || [] });
  }

  renderItem = (item) => <TxListItem {...item} />;

  renderContent() {
    return (
      <List
        className="tx-list"
        itemLayout="horizontal"
        dataSource={this.state.list}
        gutter={4}
        renderItem={this.renderItem}
      ></List>
    );
  }

  render() {
    // const { xxx } = this.props;

    return <div className="transactions-page">{this.renderContent()}</div>;
  }
}
