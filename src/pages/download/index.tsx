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

import WX_IDNS from '@/assets/rrai_miniprogram.jpeg';

import styles from './index.less';
import classNames from 'classnames';

export const DownloadPage = (props: { classNameName?: string }) => {
  return (
    <div className={styles.download_card}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <img className={styles.dd_download_pic} src={WX_IDNS}></img>
          <span>扫描进入小程序</span>
          <p>应用端努力开发中!</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <i className={styles.web_font}>立即下载桌面端</i>
        </div>
        <div className={styles.desc}>
          桌面版拥有更多的功能，充分利用自身电脑的算力
        </div>
        <div className={styles.list}>
          <div className={classnames(styles.item)}>
            <div className={classnames(styles.modal, styles.front)}>
              <div className={classnames(styles.iconfont)}>
                <AppleOutlined />
              </div>
              <p>Mac</p>
            </div>
            <a href='https://www.idns.link/statics/rrai/desktop/mac/latest/rrai_desktop.dmg'
              className={classnames(styles.modal, styles.back)}>
              <div className={classnames(styles.iconfont)}>
                <DownloadOutlined />
              </div>
              <p>下载Mac客户端</p>
            </a>
          </div>
          <div className={classNames(styles.item, styles.windows_item)}>
            <div className={classnames(styles.modal, styles.front)}>
              <div className={classnames(styles.iconfont)}>
                <WindowsOutlined />
              </div>
              <p>Windows</p>
            </div>
            <a href='https://www.idns.link/statics/rrai/desktop/windows/latest/rrai_desktop.msi'
              className={classnames(styles.modal, styles.back)}>
              <div className={classnames(styles.iconfont)}>
                <DownloadOutlined />
              </div>
              <p>下载Windows客户端</p>
            </a>
          </div>
          <div className={classnames(styles.item)}>
            <div className={classnames(styles.modal, styles.front)}>
              <div className={classnames(styles.iconfont)}>
                <LaptopOutlined />
              </div>
              <p style={{ marginTop: '2px' }}>Linux</p>
            </div>
            <a href='https://www.idns.link/statics/rrai/desktop/linux/latest/rrai_desktop.tar.gz'
              className={classnames(styles.modal, styles.back)}>
              <div className={classnames(styles.iconfont)}>
                <DownloadOutlined />
              </div>
              <p>查看安装指引</p>
            </a>
          </div>
        </div>
        <div className={styles.title}>
          <i className={styles.web_font}>Github所有版本下载</i>
        </div>
        <div className={styles.desc}>
          <a href='https://github.com/rrkeji/rrai-desktop/releases' target={'_blank'}>
            https://github.com/rrkeji/rrai-desktop/releases
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
