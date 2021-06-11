import React, { PureComponent } from 'react';

export default class SelectorPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="selector-page__header"> address-selector Header</div>;
  }

  renderContent() {
    return <div className="selector-page__main">address-selector Content</div>;
  }

  renderFooter() {
    return <div className="selector-page__footer">address-selector Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="selector-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}
