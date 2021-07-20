import React, { PureComponent } from 'react';
import { List, Skeleton, Button } from 'antd';

import TokenAvatar from '~/ui/widgets/token-avatar';
import AddressLabel from '~Widgets/address-label';
import { ListOperateIcon } from '~Widgets/svgicons/operation-icon';

export default class ListPage extends PureComponent {
  state = {
    initLoading: false,
    list: [],
    avatarSize: 28,
    gapSize: 1,
    iconColor: 'rgb(15, 78, 140)',
  };

  tokenClickHandler = (token) => {
    console.log('Token avatar >>>>>>>', token);
  };

  renderTokenDesc = (item) => {
    const { address } = item;
    return (
      <div className="token-list-item__desc">
        <AddressLabel cliped address={address} compressed />
      </div>
    );
  };

  renderTitle = (item) => {
    const { balance = 0, symbol } = item;
    return (
      <div className="token-list-item__title">
        <span className="token-symbol">{symbol}</span>
        <span className="token-balance">{balance}</span>
      </div>
    );
  };

  renderExtraActions = (item) => {
    const delActionHandler = () => {
      console.log('Del>>>>>>>>>>', item);
    };
    return (
      <div className="token-list-item__actions">
        <Button
          type="link"
          icon={<ListOperateIcon type="del" />}
          onClick={delActionHandler}
        />
      </div>
    );
  };

  renderItem = (item) => {
    const { avatarSize, gapSize, iconColor } = this.state;
    const { symbol, address = '', id, iconType, color } = item;
    console.log('>>>>>>tokenType>>>>>>', iconType);
    return (
      <List.Item actions={[this.renderExtraActions(item)]}>
        <Skeleton avatar title={false} loading={item.loading} active>
          <List.Item.Meta
            avatar={
              <TokenAvatar
                id={id}
                size={avatarSize}
                gap={gapSize}
                address={address}
                symbol={symbol}
                color={color || iconColor}
                iconType={iconType}
                onClick={this.tokenClickHandler}
              />
            }
            title={this.renderTitle(item)}
            description={this.renderTokenDesc(item)}
          />
        </Skeleton>
      </List.Item>
    );
  };

  render() {
    const { tokens } = this.props;

    return (
      <List
        loading={this.state.initLoading}
        itemLayout="horizontal"
        dataSource={tokens}
        gutter={4}
        renderItem={this.renderItem}
      />
      // <div className="brave-list">
      //   {/* <BraveIcon type="brave-eth" style={{ color: '#1E90FF' }} />
      //   <BraveIcon type="brave-btc" />

      //   <TokenAvatar
      //     id="brave-eth"
      //     gap={4}
      //     size={24}
      //     symbol="ETH"
      //     color="#1E90FF"
      //   />
      //   <TokenAvatar
      //     id="brave-bit"
      //     gap={4}
      //     size={24}
      //     symbol="BIT"
      //     onClick={(token) => {
      //       console.log(token);
      //     }}
      //     color="#1E90FF"
      //   /> */}
      // </div>
    );
  }
}
