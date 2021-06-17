import React, { PureComponent } from 'react';

import { Layout, Space, Button, List, Skeleton, Avatar } from 'antd';
import AddressHeader from '~P3/header/address-header';
import randomColor from 'randomcolor';

import { KeyIcon } from '~Widgets/svgicons';
import logger from '~Lib/log';
import { mockAddress } from '../mock-address';

import AddressLabel from '~Widgets/address-label';

const { Content } = Layout;
export default class ViewPage extends PureComponent {
  state = {
    loading: false,
    list: [], // {pub,pri,alias} when account setting pwd always pri is null
    originList: [],
  };

  componentDidMount() {
    let addressList = mockAddress();
    const opts = {
      luminosity: 'dark',
      count: addressList.length,
      format: 'rgba',
    };

    let colors = randomColor(opts);
    addressList = addressList.map((item, idx) => {
      item.bgColor = colors[idx];
      return item;
    });

    this.setState({
      initLoading: false,
      list: addressList,
      originList: addressList,
    });
  }

  createKeyringHandler = () => {
    logger.debug('>>>>>>>>>createKeyringHandler>>>>>>>>>>>');
  };

  getListData = (cb) => {};

  btnOverlay = () => (
    <>
      <Button
        className="header-toolbar-btn"
        type="ghost"
        onClick={this.createKeyringHandler}
        shape="round"
        size="small"
      >
        Create
      </Button>
    </>
  );

  addressAvatar = (item) => {
    return (
      <Avatar
        className="address-page-item__avatar"
        style={{ backgroundColor: item.bgColor }}
      >
        {item.alias ? item.alias.slice(0, 1).toUpperCase() : 'N'}
      </Avatar>
    );
  };

  renderContent() {
    const { initLoading, loading, list } = this.state;

    return (
      <List
        className="address-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        gutter={4}
        renderItem={(item) => (
          <List.Item
            extra={
              <div className="address-list-item__actions">
                <Button type="link" size="small">
                  Edit
                </Button>
                <Button type="link" size="small">
                  Delete
                </Button>
              </div>
            }
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={this.addressAvatar(item)}
                title={<span>{item.alias}</span>}
                description={<AddressLabel address={item.pubkey} cliped />}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }

  render() {
    return (
      <>
        <AddressHeader
          title="Addresses"
          className="brave-page__header"
          iconOverlay={() => <KeyIcon />}
          // btnOverlay={this.btnOverlay}
        />
        <Content>{this.renderContent()}</Content>
      </>
    );
  }
}
