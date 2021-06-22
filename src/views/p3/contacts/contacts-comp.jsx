import React, { PureComponent } from 'react';
import { List, Skeleton, Avatar } from 'antd';
import randomColor from 'randomcolor';

import { getContacts } from './mock-contacts';

import { getColorOpts } from '~Lib/configuration/color-options';
import AddressLabel from '~Widgets/address-label';

import logger from '~Lib/log';

export default class ContactsPage extends PureComponent {
  state = {
    loading: false,
    list: [],
  };

  componentDidMount() {
    let contacts = getContacts();
    const colors = randomColor(getColorOpts(contacts.length));

    contacts = contacts.map((c, i) => {
      c.bgcolor = colors[i];
      return c;
    });
    this.setState({ list: contacts });
  }

  fetchContacts = (cb) => {};

  renderHeader() {
    return <div className="contacts-page__header"> contacts Header</div>;
  }

  renderContactAvatar = (item) => {
    const { nick, address, bgcolor } = item;
    let shortNick = !nick
      ? address.slice(-4).toUpperCase()
      : nick.length > 3
      ? nick.slice(0, 3)
      : nick;
    return (
      <Avatar
        className="contact-list-item__avatar"
        style={{ backgroundColor: bgcolor }}
      >
        {shortNick}
      </Avatar>
    );
  };

  renderItem = (item) => {
    const { bmail = '', address, nick } = item;
    return (
      <List.Item className="contact-list-item">
        <Skeleton avatar title={false} loading={item.loading} actvie>
          <List.Item.Meta
            avatar={this.renderContactAvatar(item)}
            title={
              <div className="name-wrapper">
                <span className="nick-name">{nick}</span>
                {bmail ? (
                  <span className="contact-mail" style={{ marginLeft: '10px' }}>
                    {bmail}
                  </span>
                ) : null}
              </div>
            }
            description={
              <div className="contact-list-item__desc--wrapper">
                <AddressLabel
                  address={address}
                  cliped
                  compressed
                  style={{ fontSize: '0.55rem' }}
                />
              </div>
            }
          />
        </Skeleton>
      </List.Item>
    );
  };

  renderContent() {
    const { list } = this.state;
    return (
      <List
        className="contact-list"
        itemLayout="horizontal"
        dataSource={list}
        gutter={4}
        renderItem={this.renderItem}
      ></List>
    );
  }

  render() {
    // const { xxx } = this.props;

    return <div className="contact-page">{this.renderContent()}</div>;
  }
}
