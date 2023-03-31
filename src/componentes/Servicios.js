import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edificio from '../picture/FotoEdificio.jpg';
 
const Servicios =()=>{

return(
<>
    <div class="container">
      <h2>Services</h2>
      <div className="row">
        <div class="col-md-6 col-xl-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Edificio} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div class="col-md-6 col-xl-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Edificio} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
       
        <div class="col-md-6 col-xl-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Edificio} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
</>

)

}
export default Servicios;