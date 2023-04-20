import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import MINIPROGRAM_PNG from '@/assets/rrai_miniprogram.jpeg';
import HOME_PNG from '@/assets/rrai_home.png';

import { getChildrenToRender } from './utils';

export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>软软AI</p>
          </span>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <p>智能AI体验馆</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <p>提供智能AI对话、智能AI绘画等模型的体验、模型存储、提示词交流</p>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#',
          className: 'banner5-button',
          type: 'primary',
          children: '扫描进入小程序',
        },
      },
      {
        name: 'content',
        className: '',
        children: (
          <img src={MINIPROGRAM_PNG} style={{ width: '240px', marginTop: '20px' }}></img>
        ),
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children: HOME_PNG,
  },
};

export const Banner = (props: any) => {
  const dataSource = Banner50DataSource;

  const animType = {
    queue: 'bottom',
    one: {
      y: '+=30',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
    },
  };
  return (
    <div {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.childWrapper}
          componentProps={{
            md: dataSource.childWrapper.md,
            xs: dataSource.childWrapper.xs,
          }}
        >
          {dataSource.childWrapper.children.map(getChildrenToRender)}
        </QueueAnim>
        <TweenOne animation={animType.one} key="title" {...dataSource.image}>
          <img src={dataSource.image.children} width="100%" alt="img" />
        </TweenOne>
      </div>
    </div>
  );
};
export default Banner;
