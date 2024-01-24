import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from '../../images/Food_Assets/assets/about/pizza.png';
import Salad from '../../images/Food_Assets/assets/about/salad.png';
import Delivery from '../../images/Food_Assets/assets/about/delivery-bike.png';

// Mock Data Cards
const mockData = [
    {
        image: Pizza,
        title: "Original",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Salad,
        title: "Qualty Foods",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Delivery,
        title: "Fastest Delivery",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    // Add more mock data objects as needed
];

export default function Section2() {
    return (
        <>

            <section className='about_section'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className='text-center'>
                            <h2>The burger tastes better when you eat it with your family</h2>
                            <p>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                                viverra tortor in iaculis pretium at magna mauris ipsum primis
                                rhoncus feugiat
                            </p>
                            <Link to='/' className='btn order_now btn_red'>Explore Full Menu</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='about_wrapper'>
                <Container>
                    <Row className='justify-content-md-center'>{mockData.map((cardData, index) => (
                        <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                            <div className='about_box text-center'>
                                <div className='about_icon'>
                                    <img src={cardData.image} className='img-fluid' alt='icon' />
                                    <h4>{cardData.title}</h4>
                                    <p>{cardData.paragraph}</p>
                                </div>
                            </div>
                        </Col>
                    ))}</Row>
                </Container>
            </section>
        </>
    )
}