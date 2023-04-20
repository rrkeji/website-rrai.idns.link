import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { history, useLocation, useParams } from 'umi';

import styles from './index.less';
import LOGO_PNG from '@/assets/logo.png';

export const Header = (props: any) => {

    const location: any = useLocation();

    const params: any = useParams();

    const [active, setActive] = useState<string>(location.pathname);

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);

    return (
        <div className={classnames(styles.container)}>
            <div className={classnames(styles.content)}>
                <div className={classnames(styles.logo_container)}>
                    <img className={classnames(styles.logo)} src={LOGO_PNG}></img>
                    <div className={classnames(styles.product_name)}>软软AI</div>
                </div>

                <div className={classnames(styles.right)}>
                    <div className={classnames(styles.menu_bar)}>
                        <div
                            className={classnames(
                                styles.item,
                                active === '/home' ? styles.selected : undefined,
                            )}
                            onClick={() => {
                                history.push('/home');
                            }}
                        >
                            首页
                        </div>
                        <div
                            className={classnames(
                                styles.item,
                                active === '/download' ? styles.selected : undefined,
                            )}
                            onClick={() => {
                                history.push('/download');
                            }}
                        >
                            下载
                        </div>
                        <div
                            className={classnames(
                                styles.item,
                                active === '/about' ? styles.selected : undefined,
                            )}
                            onClick={() => {
                                history.push('/about');
                            }}
                        >
                            关于
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
