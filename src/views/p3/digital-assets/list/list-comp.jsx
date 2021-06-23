import React, { PureComponent } from 'react';
import { List, Skeleton } from 'antd';

import BraveIcon from '~Widgets/brave-icon';
import TokenAvatar from '~/ui/widgets/token-avatar';
import AddressLabel from '~Widgets/address-label';

export default class ListPage extends PureComponent {
  state = {
    initLoading: false,
    list: [],
    avatarSize: 28,
    gapSize: 4,
    iconColor: 'rgb(15, 78, 140)',
  };

  tokenClickHandler = (token) => {
    console.log('Token avatar >>>>>>>', token);
  };

  renderTokenDesc = (item) => {
    const { address = '0x101aDdC5e5E4749A8BB4cb40c71f467663B05eBa' } = item;
    return (
      <div className="token-list-item__desc">
        <AddressLabel cliped address={address} />
      </div>
    );
  };

  renderTitle = (item) => {
    const { balance = '1245.33', symbol } = item;
    return (
      <div className="token-list-item__title">
        <span className="token-symbol">{symbol}</span>
        <span className="token-balance">{balance}</span>
      </div>
    );
  };

  renderItem = (item) => {
    const { avatarSize, gapSize, iconColor } = this.state;
    const { symbol, address = '', id } = item;
    return (
      <List.Item>
        <Skeleton avatar title={false} loading={item.loading} active>
          <List.Item.Meta
            avatar={
              <TokenAvatar
                id={id}
                size={avatarSize}
                gap={gapSize}
                address={address}
                symbol={symbol}
                color={iconColor}
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
