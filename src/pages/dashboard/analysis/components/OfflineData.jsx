import { Card, Col, Row, Tabs } from 'antd';
import React from 'react';
import styles from '../style.less';

const OfflineData = ({ activeKey, loading, offlineData, offlineChartData, handleTabChange }) => (
  <Card
    loading={loading}
    className={styles.offlineCard}
    bordered={false}
    style={{
      marginTop: 32,
    }}
  ></Card>
);

export default OfflineData;
