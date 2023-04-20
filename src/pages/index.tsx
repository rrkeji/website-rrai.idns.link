
import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';
import { Banner, Feature } from '@/components/index';

import '@/components/less/antMotionStyle.less';

export default function HomePage() {

  const [isMobile, setisMobile] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    // 适配手机屏幕;
    enquireScreen((b: any) => {
      setisMobile(!!b);
    });
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <div className="templates-wrapper">{show && [
      <Banner key={1} />,
      <Feature key={2} />
    ]}</div>
  );
}
