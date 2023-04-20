import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';

import { getChildrenToRender } from './utils';

export const Feature = (props: any) => {
  const dataSource = Feature70DataSource;
  const { blockWrapper, titleWrapper } = dataSource;
  const childrenToRender = blockWrapper.children.map((item: any, i: number) => (
    <Col {...item} key={i.toString()}>
      <a {...item.children}>
        {item.children.children.map(getChildrenToRender)}
      </a>
    </Col>
  ));
  return (
    <div {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            interval={50}
            component={Row}
            {...blockWrapper}
          >
            {childrenToRender}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
};

export const Feature70DataSource = {
  wrapper: { className: 'home-page-wrapper feature7-wrapper' },
  page: { className: 'home-page feature7' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature7-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature7-title-h1',
        children: (
          <span>
            <p>软软AI</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature7-title-content',
        children: (
          <span>
            <p>软软AI-智能AI体验馆</p>
          </span>
        ),
      },
    ],
  },
  blockWrapper: {
    className: 'feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 8,
        xs: 24,
        name: 'block0',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>对话机器人</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>提供多种对话机器人的接入，用户可以自由选择</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 8,
        xs: 24,
        name: 'block1',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <span>
                    <p>多种绘画模型</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <span>
                    <p>提供基于Stable Diffusion的各种模型</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 8,
        xs: 24,
        name: 'block2',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <span>
                    <p>提示词交流</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>基于各种模型的提示词的交流，示例展示</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 8,
        xs: 24,
        name: 'block3',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>模型的存储</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>模型的分布式存储</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 8,
        xs: 24,
        name: 'block4',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>共享GPU</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>分享自身的算力</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 8,
        xs: 24,
        name: 'block5',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: (
                <span>
                  <p>工作工具</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <span>
                  <p>
                    各种工作的小工具
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};

export default Feature;
