import React from 'react'
import './AboutUs.css'
import { Row, Col, Image } from 'antd';

import about1 from '../../images/about-1.png';
import about2 from '../../images/about-2.png';
import about3 from '../../images/about-3.png';
import about4 from '../../images/about-4.png';

function AboutUs() {
    return (
        <div className="AboutUs">
            <div className="AboutUsContainer">
                <div className="AboutUsWrapper">
                    <Row>
                        <Col xs={24} lg={12} className="AboutUsLeft">
                            <div>
                                <h2>About Us</h2>
                                <p>Homejam is better than a backstage pass and cheaper than most concerts. It’s your opportunity for intimate performances with your favorite artists and an exclusive chance to interact with the stars. Hosted on cutting-edge technology, Homejam delivers a virtual concert like you’ve never experienced before.</p>
                            </div>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Row className="AboutImagesTop">
                                <Col xs={12}>
                                    <Image preview={false} src={about1} />
                                </Col>
                                <Col xs={12}>
                                    <Image preview={false} src={about2} />
                                </Col>
                            </Row>
                            <Row className="AboutImagesBottom">
                                <Col xs={12}>
                                    <Image preview={false} src={about3} />
                                </Col>
                                <Col xs={12}>
                                    <Image preview={false} src={about4} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
