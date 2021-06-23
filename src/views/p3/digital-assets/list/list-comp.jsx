import React, { PureComponent } from 'react';
import BraveIcon from '~Widgets/brave-icon';

export default class ListPage extends PureComponent {
  state = {
    list: [],
  };

  renderContent() {
    return <div className="list-page__main">list Content</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="list-page">
        <BraveIcon type="brave-eth" />
        <BraveIcon type="brave-btc" />
        <BraveIcon type="brave-bll" />
      </div>
    );
  }
}
