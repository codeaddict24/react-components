import React, {useState, useEffect} from 'react'
import { Row, Col, Button } from 'antd';
import './Footer.css'
import { Link  } from 'react-router-dom';

import logo from '../../images/logo.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'

function Footer() {

    const [ menuActive, setMenuState ] = useState(false);

    const handleMenu = () => {
        setMenuState(!menuActive);
    }

    return (
        <div className="Footer">
            <div className="FooterContainer">
                <div className="FooterWrapper">
                    <Row>
                        <Col xs={24} md={6} lg={4} xl={6}>
                            <div className="FooterLogo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="FooterSocial">
                                <ul>
                                    <li><a href=""><img src={instagram} alt=""/></a></li>
                                    <li><a href=""><img src={twitter} alt=""/></a></li>
                                    <li><a href=""><img src={facebook} alt=""/></a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={24} md={4} lg={4} xl={4}>
                            <div className={`FooterLinks ${menuActive ? "active" : ""}`}>
                                <h3 onClick={() => handleMenu()}>Follow Us</h3>
                                <ul>
                                    <li><Link to='/'>Facebook</Link></li>
                                    <li><Link to='/'>Instagram</Link></li>
                                    <li><Link to='/'>Twitter</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={24} md={4} lg={4} xl={4}>
                        <div className={`FooterLinks ${menuActive ? "active" : ""}`}>
                        <h3 onClick={() => handleMenu()}>Book</h3>
                            <ul>
                                <li><Link to='/'>All Artists</Link></li>
                                <li><Link to='/'>Sessions</Link></li>
                                <li><Link to='/'>Premium</Link></li>
                                <li><Link to='/'>VIP Room</Link></li>
                            </ul>
                        </div>
                        </Col>
                        <Col xs={24} md={4} lg={4} xl={4}>
                        <h3>Company</h3>
                            <ul>
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/'>Support</Link></li>
                                <li><Link to='/'>Contact Us</Link></li>
                                <li><Link to='/'>Reviews</Link></li>
                            </ul>
                        </Col>
                        <Col xs={24} md={3} lg={4} xl={4}>
                        <h3>Cart</h3>
                            <ul>
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/'>Support</Link></li>
                            </ul>
                        </Col>
                        <Col xs={24} md={2} lg={4} xl={2}>
                            <Button type="primary">
                                Sign Up
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Footer
