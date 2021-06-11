import React, { PureComponent } from 'react';

export default class ListPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="address-list-page__header"> list Header</div>;
  }

  renderContent() {
    return <div className="address-list-page__main">list Content</div>;
  }

  renderFooter() {
    return <div className="address-list-page__footer">list Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="address-list-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}
