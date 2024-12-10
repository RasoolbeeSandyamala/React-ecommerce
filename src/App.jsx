import { useState } from 'react'

import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {


  return (
    <>


      <Navbar expand="lg" className=" ms-5 me-5">
        <Container>
          <Navbar.Brand href="#home"><img src="logo.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='m-auto' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="" className='me-5 p-2 fw-bold link-1 ms-5'>HOME</Nav.Link>
              <Nav.Link href="" className='me-5 p-2 fw-bold link ms-5'>ABOUT</Nav.Link>
              <Nav.Link href="" className='me-5 p-2 fw-bold link ms-5'>OUR ROOM </Nav.Link>
              <Nav.Link href="" className='me-5 p-2 fw-bold link ms-5'>BLOG</Nav.Link>
              <Nav.Link href="" className='me-5 p-2 fw-bold link ms-5'>CONTACT US</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <div className="carousel ms-5 me-5">
        <Carousel data-bs-theme="white">
          <Carousel.Item>
            <img
              className=" w-100 "
              src="banner1.jpg"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" w-100"
              src="banner2.jpg"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" w-100 "
              src="banner3.jpg"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container mt-5 mb-5 ">
        <Row>
          <Col className='m-auto'><h1 className='mt-5 mb-3 me-5 fw-bold p-3' style={{ letterSpacing: 2 }}>ABOUT US</h1>
            <p className='mb-3 p-3' style={{lineHeight:2}}>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets,and again during the 90s as desktop publishers bundled the next with their software. Today it's seeen all around the web; on templates,websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
            <Button variant="dark" className='rounded-pill mb-5 ' style={{ letterSpacing: 2 }} size="lg">
              Read More
            </Button></Col>
          <Col><img src="blog_bg.jpg" alt="" style={{ width: 900, height: 500 }} className='img1 w-100  ms-3 mt-5' /></Col>
        </Row>
      </div>
      <div className="cards container mb-5 mt-5">
        <h1 className='fw-bold text-center mt-5 mb-4'>OUR ROOM</h1>
        <h5 className='text-center mb-5'>Lorem ipsum available, but the majority have suffered</h5>
        <Row>
          <Col> <Card className='mb-5' style={{ width: '25rem' }}>

            <Card.Img src='gallery1.jpg' />
            <Card.Body>
              <Card.Title className='text-center fw-bold' style={{ letterSpacing: 2, fontSize: 35 }}>Bed Room</Card.Title>

              <Card.Text className='p-3 ms-2 me-3 text-center ' style={{ lineHeight: 2, fontSize: 18 }}>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
              </Card.Text>

            </Card.Body>
          </Card></Col>
          <Col><Card className='mb-5' style={{ width: '25rem' }}>

            <Card.Img src='gallery2.jpg' />
            <Card.Body>
              <Card.Title className='text-center fw-bold' style={{ letterSpacing: 2, fontSize: 35 }}>Bed Room</Card.Title>

              <Card.Text className='p-3 ms-2 me-3 text-center ' style={{ lineHeight: 2, fontSize: 18 }}>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
              </Card.Text>

            </Card.Body>
          </Card>
          </Col>
          <Col><Card className='mb-5' style={{ width: '25rem' }}>

            <Card.Img src='gallery3.jpg' />
            <Card.Body>
              <Card.Title className='text-center fw-bold' style={{ letterSpacing: 2, fontSize: 35 }}>Bed Room</Card.Title>

              <Card.Text className='p-3 ms-2 me-3 text-center ' style={{ lineHeight: 2, fontSize: 18 }}>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
              </Card.Text>

            </Card.Body>
          </Card></Col>
        </Row>
        <Row>
          <Col> <Card className='mb-5' style={{ width: '25rem' }}>

            <Card.Img src='gallery4.jpg' />
            <Card.Body>
              <Card.Title className='text-center fw-bold' style={{ letterSpacing: 2, fontSize: 35 }}>Bed Room</Card.Title>

              <Card.Text className='p-3 ms-2 me-3 text-center ' style={{ lineHeight: 2, fontSize: 18 }}>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
              </Card.Text>

            </Card.Body>
          </Card></Col>
          <Col><Card className='mb-5' style={{ width: '25rem' }}>

            <Card.Img src='gallery5.jpg' />
            <Card.Body>
              <Card.Title className='text-center fw-bold' style={{ letterSpacing: 2, fontSize: 35 }}>Bed Room</Card.Title>

              <Card.Text className='p-3 ms-2 me-3 text-center ' style={{ lineHeight: 2, fontSize: 18 }}>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
              </Card.Text>

            </Card.Body>
          </Card>
          </Col>
          <Col><Card className='mb-5' style={{ width: '25rem' }}>

            <Card.Img src='gallery6.jpg' />
            <Card.Body>
              <Card.Title className='text-center fw-bold' style={{ letterSpacing: 2, fontSize: 35 }}>Bed Room</Card.Title>

              <Card.Text className='p-3 ms-2 me-3 text-center ' style={{ lineHeight: 2, fontSize: 18 }}>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
              </Card.Text>

            </Card.Body>
          </Card></Col>
        </Row>
      </div>

      <div className="container mt-5 mb-5">
        <center>
          <h1 className='fw-bold mb-5'>GALLERY</h1>
        </center>
        <div className="gallery">
          <div className="cards">
            <img src="gallery1.jpg" alt="" />
          </div>
          <div className="cards">
            <img src="gallery2.jpg" alt="" />
          </div>
          <div className="cards">
            <img src="gallery3.jpg" alt="" />
          </div>
          <div className="cards">
            <img src="gallery4.jpg" alt="" />
          </div>
          <div className="cards">
            <img src="gallery5.jpg" alt="" />
          </div>
          <div className="cards">
            <img src="gallery6.jpg" alt="" />
          </div>
          <div className="cards">
            <img src="gallery7.jpg" alt="" />
          </div>
          <div className="cards">
            <img src="gallery8.jpg" alt="" />
          </div>
        </div>
      </div>
     
    </>
  )
}

export default App
