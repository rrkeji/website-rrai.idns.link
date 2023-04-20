import { Link, Outlet } from 'umi';
import { Header, Footer } from '@/components/index';
import '@/components/less/antMotionStyle.less';

import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
