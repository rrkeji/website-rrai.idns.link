import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import {
  AppleOutlined,
  AndroidOutlined,
  WindowsOutlined,
  UserOutlined,
  DownloadOutlined,
  LaptopOutlined,
} from '@ant-design/icons';

import WX_IDNS from '@/assets/idns_gzh_qrcode.jpg';

import styles from './index.less';
import classNames from 'classnames';

export const AboutPage = (props: { classNameName?: string }) => {
  return (
    <div className={styles.download_card}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <img className={styles.dd_download_pic} src={WX_IDNS}></img>
          <p>扫描关注软软</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <i className={styles.web_font}>关注软软公众账号</i>
        </div>
        <div className={styles.desc}>
          关注软软的一些动态
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
