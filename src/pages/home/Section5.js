import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageIos from '../../images/Food_Assets/assets/shop/appstore.png';
import AndroidImg from '../../images/Food_Assets/assets/shop/googleplay.png';
import ShopBg from '../../images/Food_Assets/assets/shop/e-shop.png';
import Brand1 from '../../images/Food_Assets/assets/brands/brand-11.png';
import Brand2 from '../../images/Food_Assets/assets/brands/brand-12.png';
import Brand3 from '../../images/Food_Assets/assets/brands/brand-13.png';
import Brand4 from '../../images/Food_Assets/assets/brands/brand-14.png';
import Brand5 from '../../images/Food_Assets/assets/brands/brand-15.png';
import Brand6 from '../../images/Food_Assets/assets/brands/brand-16.png';
import Brand7 from '../../images/Food_Assets/assets/brands/brand-17.png';
import Brand8 from '../../images/Food_Assets/assets/brands/brand-18.png';


export default function Section5() {
    return (
        <>
            <section className='shop_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='align-items-center text-lg-start mb-5 mb-lg-0'>
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p> Aliquam a augue suscipit, luctus neque purus ipsum and neque
                                dolor primis libero tempus, blandit varius
                            </p>

                            <Link to="/"><img src={ImageIos} alt="IOS" className='img-fluid me-3 store' /></Link>
                            <Link to="/"><img src={AndroidImg} alt="Android" className='img-fluid me-3 store' /></Link>
                        </Col>

                        <Col lg={6}>
                            <img src={ShopBg} className='img-fluid' alt='shop-bg' />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='brand_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='brand_img'>
                                            <img src={Brand1} className='img-fluid' alt='brand-img1' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand2} className='img-fluid' alt='brand-img2' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand3} className='img-fluid' alt='brand-img3' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand4} className='img-fluid' alt='brand-img4' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand5} className='img-fluid' alt='brand-img5' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand6} className='img-fluid' alt='brand-img6' />
                                        </div>

                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='brand_img'>
                                            <img src={Brand3} className='img-fluid' alt='brand-img1' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand4} className='img-fluid' alt='brand-img2' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand5} className='img-fluid' alt='brand-img5' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand6} className='img-fluid' alt='brand-img6' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand7} className='img-fluid' alt='brand-img7' />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand8} className='img-fluid' alt='brand-img8' />
                                        </div>

                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}