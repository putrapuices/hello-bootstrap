// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
// import { Button } from 'react-bootstrap';
import {
  Container,
  Row,
  Col,
  Media,
  Alert,
  Badge,
  Button,
  Breadcrumb,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Carousel,
  Dropdown,
  Form,
  InputGroup,
  FormControl,
  Image,
  Figure,
  Jumbotron,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  Pagination,
  ProgressBar,
  Table,
  Tabs,
  Tab,
  Collapse,
} from "react-bootstrap";
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
  constructor(props) {
    super(props);
    this.state = {
      buka: true,
    };
  }
  render() {
    const munculpopover = (
      <Popover title="informasi">
        This is popover astikan triggernya benar
      </Popover>
    );
    return (
      // <div className='container'>
      //   <Button varian='primary'>Testing</Button>
      //   <h1>Hello Bootstrap</h1>
      // </div>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Menu</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <Form.Control placeholder="search" className="mr-sm-2" />
            <Button>Search</Button>
          </Form>
        </Navbar>

        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <Nav>
          <Nav.Item>
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tabs defaultActiveKey="about">
          <Tab eventKey="home" title="home">
            <p>Halaman home</p>
          </Tab>
          <Tab eventKey="about" title="about">
            <p>Halaman about</p>
          </Tab>
          <Tab eventKey="contact" title="contact">
            <p>Halaman contact</p>
          </Tab>
        </Tabs>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"
              alt="1"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
              alt="1"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
              alt="1"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>
                hghghgh uNu123lla vitae elit libero, a pharetra augue mollis
                interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Jumbotron>
          <h1>Hello World</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <Button variant="primary">Learn More</Button>
        </Jumbotron>
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
                <p>Makanan Sate Lorem</p>Nulla laboris ipsum in ea minim dolore.
                Exercitation ut nulla ullamco do velit aute commodo in anim
                veniam aute. Voluptate elit ex enim aute officia adipisicing
                sint. Occaecat culpa commodo culpa est. Qui adipisicing culpa
                ullamco elit pariatur culpa exercitation ex labore officia non
                et. Irure ut do laborum cupidatat cillum elit qui adipisicing
                anim enim nisi sint sit ea. Laborum ad est Lorem exercitation
                esse. Dolore ex labore in nulla labore fugiat consequat duis
                officia laboris dolore exercitation consequat sit. Ea in in
                aliqua commodo dolore voluptate irure sit do do do consectetur
                in. Consectetur culpa incididunt elit sit sit incididunt sit
                eiusmod elit in nostrud labore duis. Aliqua nulla Lorem
                adipisicing consequat ad anim mollit voluptate amet. Enim irure
                elit labore irure aecat nostrud. Mollit nostrud veniam est
                cillum tempor amet in enim et. Reprehenderit minim id et
                voluptate in dolore non adipisicing enim incididunt deserunt
                mollit et sunt. Fugiat deserunt veniam duis Lorem fugiat commodo
                duis esse commodo.
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
                <p>Makanan Sate</p>
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
          <Button variant="primary">
            Profile <Badge variant="light">9</Badge>
          </Button>
          <Col>
            <Button variant="primary">Tombol</Button>
            <ButtonToolbar
              aria-label="Toolbar with button groups"
              aria-label="First group"
            >
              <ButtonGroup className="ml-2">
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
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                variant="top"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success">Pilih Menu</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Sate</Dropdown.Item>
                <Dropdown.Item href="/">Ayam</Dropdown.Item>
                <Dropdown.Item href="/">Ikan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <br />
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Username" />
            </InputGroup>

            <Image
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg"
              alt="gambar"
              roundedCircle
            />
            <Figure>
              <Figure.Image
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                alt="nasi padang"
                height={100}
                width="170"
              />
              <Figure.Caption>Nasi Padang, makanan Terlezat</Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Nasi Goreng</ListGroup.Item>
              <ListGroup.Item>Mie Goreng</ListGroup.Item>
              <ListGroup.Item>Nasi Uduk</ListGroup.Item>
              <ListGroup.Item>Nasi adang</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Modal Title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Modal Body Here</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondry">Close</Button>
                <Button variant="primary">Save Change</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Col>
          <Col>
            <OverlayTrigger
              // trigger="click" //jika triggernya tidak harus di klik maka di comment saja
              placement="right"
              overlay={munculpopover}
            >
              <Button variant="success">Munculkan Overlay</Button>
            </OverlayTrigger>
            <br />
            <br />
            <Pagination size="lg">
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item Active>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
            </Pagination>
            <br />
            <ProgressBar now={75} label="75%" />
          </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Menu</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nasi Goreng</td>
              <td>Makanan</td>
              <td>20.000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mie Goreng</td>
              <td>Makanan</td>
              <td>15.000</td>
            </tr>
          </tbody>
        </Table>

        <Button
          variant="primary"
          onClick={() => {
            this.setState({ buka: !this.state.buka });
          }}
        >
          Click
        </Button>
        <Collapse in={this.state.buka}>
          <p>Show paragraph</p>
        </Collapse>
      </Container>
    );
  }
}
export default App;
