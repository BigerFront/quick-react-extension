import React, { PureComponent } from 'react';

export default class ContractPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="smart-page__header"> smart-contract Header</div>;
  }

  renderContent() {
    return <div className="smart-page__main">smart-contract Content</div>;
  }

  renderFooter() {
    return <div className="smart-page__footer">smart-contract Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="smart-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}
