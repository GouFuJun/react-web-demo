import React, { FC, useState, useEffect } from 'react';
import './Login.css';

import { QRNormal } from 'react-qrbtf'

const Login: FC = () => {
    // 登录提示
    const [tip, setTip] = useState<{
        msg: string;
        content?: string;
        code?: string;
    }>({ msg: "扫码登录<br/>来自东方的关怀" });

    // 二维码
    const [QRcode, setQRcode] = useState('');

    // 获取用户信息
    useEffect(() => {
        /**
         * axios 请求
         * 获取用户信息，根据返回值去显示提示语句
         */
    }, []);

    return (
        <div className="page-login layout-container">
            <div className="scan-box-con">
                <div className="scan-box">
                    {/* 二维码 */}
                    <QRNormal
                        value={QRcode}
                        posColor="#fefefe" 
                        otherColor="#fefefe"
                        size={70}
                    />
                </div>
                <div className="tip-txt">
                    <div className="login-tip-til"
                        dangerouslySetInnerHTML={{ __html: tip.msg }}
                    ></div>
                    <div className="login-tip-content">{null}</div>
                </div>
                <img className="qrbg" src={require("@images/qrbg2.png")} />
            </div>
        </div>
    );
}

export default Login;