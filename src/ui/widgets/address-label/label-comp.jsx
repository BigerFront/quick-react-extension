import React, { PureComponent } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'antd';

export default class LabelPage extends PureComponent {
  state = {
    addressText: '',
    copiedTips: '',
    visible: false,
  };

  componentDidMount() {}

  onVisibleChange = (visible) => {
    this.setState({ visible: visible });
    if (!visible) {
      this.setState({ copiedTips: 'click copy address' });
    }
  };

  onCopyHandler = (text, result) => {
    if (result) {
      this.setState({ visible: true });

      setTimeout(() => {
        this.setState({ visible: false, copiedTips: 'address copied!' });
      }, 2000);
    } else {
    }
  };

  onClickHandler = () => {
    const { addressText } = this.props;
    this.setState({ addressText });
  };

  renderNoClipboard() {
    const { address } = this.props;
    return (
      <span className="address-breaker" style={{ wordBreak: 'break-all' }}>
        {address}
      </span>
    );
  }

  renderCopiedTips = () => {
    return <div className="address-copied-tips">{this.state.copiedTips}</div>;
  };

  renderHasClipboard() {
    const { address } = this.props;
    return (
      <CopyToClipboard text={address} onCopy={this.onCopyHandler}>
        <span
          className="address-breaker"
          style={{ cursor: 'copy', wordBreak: 'break-all' }}
        >
          {address}
        </span>
      </CopyToClipboard>
    );
  }

  render() {
    const { cliped } = this.props;

    return cliped ? this.renderHasClipboard() : this.renderNoClipboard();
  }
}
