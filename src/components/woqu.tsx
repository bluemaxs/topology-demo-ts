/*
 * @Author: bluemaxs
 * @Date: 2022-08-03 16:00:47
 * @LastEditors: bluemaxs
 * @LastEditTime: 2022-08-30 11:05:12
 * @Description: 沃趣产品redis
 */
import React from 'react';
import RedisIcon from '../assets/redis.svg';
import ChangeIcon from '../assets/change.svg';
import "./woqu.css";

interface RedisIconBasicProps {
    role: string;
    name: string;
}
function RedisIconBasic (props: RedisIconBasicProps) {
    const { role, name } = props;
    return (
        <div className='redis-icon-basic'>
            <img alt='redis' className='redis-icon' src={RedisIcon} />
            <div className='redis-icon-label'>{role}:{name}</div>
        </div>
    )
}

function RedisNMNSItem(): JSX.Element {
    return (
        <div className='redis-topology-box'>
            <RedisIconBasic role="主节点" name="cc-0" />
            <img alt='change' className='change-icon' src={ChangeIcon} />
            <RedisIconBasic role="从节点" name="cc-1" />
        </div>
    )
}
function RedisNMNS(): JSX.Element {
    return (
        <div className="service-box">
            <div className="service-title-box">
                <div className='service-title-left'>
                    <img alt='redis' src={RedisIcon} />
                    <div className="service-title-content">
                        <div className="service-value">（服务名称）test-redis</div>
                        <div className="service-label">（存储类型）lvm</div>
                    </div>
                    <div className="service-mode-content">
                        <div className="service-value">三主三从（代理模式）</div>
                        <div className="service-label">模式</div>
                    </div>
                </div>
                <div className='service-title-right'>
                    <div className="service-action">重启服务</div>
                    <div className="service-action">修改规格</div>
                </div>
            </div>
            <div className='driver-line'></div>
            <div className='pod-box'>
                <div className='pod-type-box'>
                    主从节点
                    <div className='pod-icon-box'>
                        <RedisNMNSItem />
                        <RedisNMNSItem />
                        <RedisNMNSItem />
                    </div>
                </div>
                <div className='pod-type-box'>
                    代理节点
                    <div className='pod-icon-box'>
                        <RedisIconBasic role="代理节点" name="proxy-0" />
                        <RedisIconBasic role="代理节点" name="proxy-1" />
                        <RedisIconBasic role="代理节点" name="proxy-2" />
                    </div>
                </div>
                <div className='pod-type-box'>
                    未知节点
                    <div className='pod-icon-box'>
                        <RedisIconBasic role="null" name="null-0" />
                        <RedisIconBasic role="null" name="null-1" />
                        <RedisIconBasic role="null" name="null-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RedisNMNS;