import React from 'react'
import { Link } from 'react-router-dom';
import './Upcoming.css'
import { Row, Col, Image, Card } from 'antd';
import {CardData} from '../../data'

import arrow from '../../images/arrow-right.svg';

function Upcoming() {

    document.addEventListener('DOMContentLoaded', function() {
        const ele = document.getElementById('swiper');
    
        let pos = { top: 0, left: 0, x: 0, y: 0 };
    
        const mouseRightHandler = function(e) {
            ele.style.userSelect = 'none';
    
            pos = {
                left: ele.scrollLeft,
                top: ele.scrollTop,
                x: e.clientX,
                y: e.clientY,
            };
    
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseLeftHandler);
        };
    
        const mouseMoveHandler = function(e) {
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
    
            ele.scrollTop = pos.top - dy;
            ele.scrollLeft = pos.left - dx;
        };
    
        const mouseLeftHandler = function() {
            ele.style.removeProperty('user-select');
    
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseLeftHandler);
        };
    
        ele.addEventListener('mousedown', mouseRightHandler);
    });
    
    return (
        <div className="Upcoming">
                <div className="UpcomingWrapper">
                <div className="UpcomingContainer">
                    <Row>
                        <Col xs={24}>
                            <div className="UpcomingHeader">
                                <h2>Upcoming Shows</h2>
                                <Link to='/' className="ViewAll">View All</Link>
                            </div>
                        </Col>
                    </Row>
                    </div>
                    <div className="CardsWrapper" id="swiper">
                    <Row>
                    {CardData.map((item) =>
                    <Col xl={6}>
                            <Card
                                cover={<img alt="" src={item.img} />}
                                bordered={false}
                                style={{ width: 250 }}
                            >
                                <div className="CardCategory">{item.category}</div>
                                <div className="CardName">{item.name}</div>
                                <div className="MoreInfo">
                                    <Link to='/'>More Info <img alt="" src={arrow} /></Link>
                                    <span className="icon icon-ticket"></span>
                                </div>
                            </Card>
                    </Col>
                    )}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
