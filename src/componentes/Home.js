
import React from "react";
import primera from '../picture/first-slide.jpg';
import segunda from '../picture/second-slide.jpg';
import tercera from '../picture/third-slide.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edificio from '../picture/FotoEdificio.jpg';
import '../css/home.css';



const Home = ()=> { 

return(
<>
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={primera}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={segunda}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={tercera}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    <div className="container">
      <h2>Our Work</h2>
      <div class="row d-flex text-center justify-content-center align-items-center">
        <div class="col-md-6 col-xl-6">
          <p>
          Lorem ipsum dolor sit amet. Non fugit adipisci et tempore beatae et enim nesciunt ea perferendis voluptas non commodi eaque. Sit sint harum aut doloremque galisum et minus harum sed quaerat consectetur! Qui iusto accusantium non quas tempora ut vitae excepturi quo nobis dolore hic consequatur magnam eos enim voluptas qui sapiente quia.
          </p>
        </div>
        <div class="col-md-6 col-xl-6 ">
          <img src={Edificio} class="card-img-top" alt="..."/>
        </div>
      </div>

      <div class="row change d-flex text-center justify-content-center align-items-center">
        <div class="col-md-6 col-xl-6 columna2">
          <img src={Edificio} class="card-img-top" alt="..."/>
        </div>
        <div class="col-md-6 col-xl-6 columna1">
            <p>
            Lorem ipsum dolor sit amet. Non fugit adipisci et tempore beatae et enim nesciunt ea perferendis voluptas non commodi eaque. Sit sint harum aut doloremque galisum et minus harum sed quaerat consectetur! Qui iusto accusantium non quas tempora ut vitae excepturi quo nobis dolore hic consequatur magnam eos enim voluptas qui sapiente quia.
            </p>
        </div>
      </div>

      <div class="row d-flex text-center justify-content-center align-items-center">
        <div class="col-md-6 col-xl-6">
          <p>
          Lorem ipsum dolor sit amet. Non fugit adipisci et tempore beatae et enim nesciunt ea perferendis voluptas non commodi eaque. Sit sint harum aut doloremque galisum et minus harum sed quaerat consectetur! Qui iusto accusantium non quas tempora ut vitae excepturi quo nobis dolore hic consequatur magnam eos enim voluptas qui sapiente quia.
          </p>
        </div>
        <div class="col-md-6 col-xl-6">
          <img src={Edificio} class="card-img-top" alt="..."/>
        </div>
      </div>
    </div>

    <div className="container">
      <h2>Testimonials</h2>
      <div class="row">
        <div class="col-md-6 col-xl-3">
        <Card className="text-center" border="light">
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="col-md-6 col-xl-3">
        <Card className="text-center" border="light">
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="col-md-6 col-xl-3">
        <Card className="text-center" border="light">
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="col-md-6 col-xl-3">
        <Card className="text-center" border="light">
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>

</>

);


}
export default Home;