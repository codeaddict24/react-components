import React from 'react'
import './Reviews.css'
import { Row, Col, Image, Card, Button } from 'antd'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import {settings, ReviewsData} from '../../data'

function Reviews() {


    return (
        <div className="Reviews">
            <div className="ReviewsContainer">
                <div className="ReviewsWrapper">
                <div>
                    <Row>
                        <Col xs={24}>
                            <div className="ReviewsHeader">
                                <h2>Reviews</h2>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Slider {...settings}>
                        {ReviewsData.map((item) =>
                            <Card
                                bordered={false}
                            >
                            <div className="CardHeader">
                                    <img className="CardAvatar" src={item.avatar} alt=""/>
                                        <div className="HeaderRight">
                                        <p className="HeaderName">{item.name}</p>

                                        <div className="CountryWrapper">
                                            <img src={item.flag} alt=""/>
                                            <p className="HeaderCountry">{item.country}</p>
                                        </div>
                                    </div>
                             </div>
                            <div className="CardBody"><p>{item.body}</p></div>
                            </Card>
                        )}
                    </Slider>
                    <Row>
                        <Col xs={24} className="ReviewsButton">
                            <Button type="primary">
                                Write a review
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Reviews
