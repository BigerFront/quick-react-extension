import React, { PureComponent } from 'react';

export default class FoundPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="found-page__header"> not-found Header</div>;
  }

  renderContent() {
    return <div className="found-page__main">not-found Content</div>;
  }

  renderFooter() {
    return <div className="found-page__footer">not-found Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="unfound-page">
        <div>
          <h1>Not Foutd Page</h1>
        </div>
      </div>
    );
  }
}
