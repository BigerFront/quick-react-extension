import React from 'react';
import { List, Skeleton, Button } from 'antd';

import { SelectOutlined, CheckCircleTwoTone } from '@ant-design/icons';

export default function TxItem(txItemWrap = {}) {
  const { txData = {}, timestamp, statusText, hash, loading } = txItemWrap;

  const { nonce, blockHash, blockNumber, transactionIndex, input, status } =
    txData;

  return (
    <List.Item>
      <Skeleton avatar title={false} loading={loading} actvie>
        <List.Item.Meta
          title={
            <div className="tx-list-item__title">
              <div className="tx-list-item__label">
                <span>Transaction Hash</span>
                <span className="list-item__status">
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                </span>
              </div>
              <div>
                <span className="list-item__content tx-hash">{hash}</span>
              </div>
            </div>
          }
          description={
            <>
              <div className="tx-list-item__footer">
                <span className="list-item__time">
                  3 mins ago (Jun-22-2021 09:08:20 AM +UTC)
                </span>
                <Button
                  icon={<SelectOutlined />}
                  size="small"
                  type="link"
                ></Button>
              </div>
            </>
          }
        />
      </Skeleton>
    </List.Item>
  );
}
