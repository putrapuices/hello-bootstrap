// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import {Container,Row,Col,Media, Alert,Badge, Button,Breadcrumb,ButtonGroup,ButtonToolbar
,Card,Carousel,Dropdown,Form, InputGroup,FormControl,Image} from "react-bootstrap";
// import Media from 'react-bootstrap/Media';


// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

// export default App;

class App extends Component {
  render() {
    return (
      // <div className='container'>
      //   <Button varian='primary'>Testing</Button>
      //   <h1>Hello Bootstrap</h1>
      // </div>
      
      <Container>
        <Breadcrumb>
  <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
  <Breadcrumb.Item href='/'>Library</Breadcrumb.Item>
  <Breadcrumb.Item active>Profile</Breadcrumb.Item>
</Breadcrumb>
<Carousel>
  <Carousel.Item>
  <img className='d-block w-100' src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg' alt='1' />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className='d-block w-100' src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png' alt='1' />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className='d-block w-100' src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg' alt='1' />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>hghghgh uNu123lla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Row>
  <Col>
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Makanan Sate Lorem 
        </p>Nulla laboris ipsum in ea minim dolore. Exercitation ut nulla ullamco do velit aute commodo in anim veniam aute. Voluptate elit ex enim aute officia adipisicing sint. Occaecat culpa commodo culpa est.

Qui adipisicing culpa ullamco elit pariatur culpa exercitation ex labore officia non et. Irure ut do laborum cupidatat cillum elit qui adipisicing anim enim nisi sint sit ea. Laborum ad est Lorem exercitation esse. Dolore ex labore in nulla labore fugiat consequat duis officia laboris dolore exercitation consequat sit. Ea in in aliqua commodo dolore voluptate irure sit do do do consectetur in. Consectetur culpa incididunt elit sit sit incididunt sit eiusmod elit in nostrud labore duis. Aliqua nulla Lorem adipisicing consequat ad anim mollit voluptate amet.

Enim irure elit labore irure aecat nostrud. Mollit nostrud veniam est cillum tempor amet in enim et. Reprehenderit minim id et voluptate in dolore non adipisicing enim incididunt deserunt mollit et sunt. Fugiat deserunt veniam duis Lorem fugiat commodo duis esse commodo.
      </Media.Body>
    </Media>
  </Col>
  <Col>
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Makanan Sate
        </p>
      </Media.Body>
    </Media>
  </Col>
</Row>
<Row>
  <Col>
  <Alert variant="primary">User yang kamu masukkan salah</Alert>
  </Col>
  <h5>
  <Badge variant="secondary">Benar</Badge>
  </h5>
  <Button variant = "primary"  >
    Profile <Badge variant="light">9</Badge>
    </Button>
  <Col>
  <Button variant='primary'>Tombol</Button>
  <ButtonToolbar aria-label="Toolbar with button groups" aria-label="First group">
  <ButtonGroup className='ml-2'>
  <Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
  <Button>4</Button>
  <Button>5</Button>
</ButtonGroup>
<ButtonGroup className="me-2" aria-label="Second group">
    <Button>5</Button> <Button>6</Button> <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button>8</Button>
  </ButtonGroup>
  </ButtonToolbar>
  </Col>
</Row>
<Row>
  <Col>
  <Card style={{width: '18rem'}} >
  <Card.Img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' variant='top' />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
       Some quick example text to build on the card title and make up the bulk of the card's content.
    </Card.Text>
    <Button variant='primary'>Go Somewhere</Button>
  </Card.Body>
</Card>
  </Col>
  <Col>
  <Dropdown>
  <Dropdown.Toggle variant='success'>
    Pilih Menu
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="/">Sate</Dropdown.Item>
    <Dropdown.Item href="/">Ayam</Dropdown.Item>
    <Dropdown.Item href="/">Ikan</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<br/>
<br/>
<Form>
  <Form.Group>
    <Form.Label>Nama</Form.Label>
    <Form.Control type="text" placeholder="Masukan Nama" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Masukan Email" />
    <Form.Text className="text-muted">
      Kami tidak akan menyalah gunkan email kamu
    </Form.Text>
  </Form.Group>
  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Masukkan Password" />
    
  </Form.Group>
  <Form.Group>
        <Form.Check type="checkbox" label="Kami Setujui" />
  </Form.Group>
  <Button variant="primary" type="submit">Submit</Button>

</Form>

  </Col>
  <Col>
 <InputGroup className="mb-3">
   <InputGroup.Prepend>
   <InputGroup.Text>@</InputGroup.Text>
   </InputGroup.Prepend>
   <FormControl placeholder="Username"/>
 </InputGroup>

 <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg' alt='gambar' roundedCircle />
  </Col>
</Row>
</Container>
    );
  }
}
export default App;
