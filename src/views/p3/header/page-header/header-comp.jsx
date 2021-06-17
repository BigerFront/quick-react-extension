import React, { PureComponent } from 'react';

export default class HeaderPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="header-page__header"> page-header Header</div>;
  }

  renderContent() {
    return <div className="header-page__main">page-header Content</div>;
  }

  renderFooter() {
    return <div className="header-page__footer">page-header Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="header-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}
