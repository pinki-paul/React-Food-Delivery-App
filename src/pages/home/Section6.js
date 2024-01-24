import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import User1 from '../../images/Food_Assets/assets/blog/review-author-1.jpg';
import User2 from '../../images/Food_Assets/assets/blog/review-author-2.jpg';
import User3 from '../../images/Food_Assets/assets/blog/review-author-3.jpg';
import User4 from '../../images/Food_Assets/assets/blog/review-author-5.jpg';


export default function Section6() {
    return (
        <section className='blog_section'>
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={User1} className='img-fluid' alt='user-img1' />
                                    <p>
                                        " Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                        <div className='item_rating mb-2'>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={User2} className='img-fluid' alt='user-img2' />
                                    <p>
                                        " Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                        <div className='item_rating mb-2'>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={User3} className='img-fluid' alt='user-img3' />
                                    <p>
                                        " Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                        <div className='item_rating mb-2'>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={User4} className='img-fluid' alt='user-img4' />
                                    <p>
                                        " Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                        <div className='item_rating mb-2'>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>



                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}