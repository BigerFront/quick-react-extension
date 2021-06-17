import React, { PureComponent } from 'react';

export default class AddressPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="address-page__header"> keyring-address Header</div>;
  }

  renderContent() {
    return <div className="address-page__main">keyring-address Content</div>;
  }

  renderFooter() {
    return <div className="address-page__footer">keyring-address Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="address-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}
