// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import {Container,Row,Col,Media} from "react-bootstrap";
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

Enim irure elit labore irure adipisicing elit tempor velit duis. Sunt irure id ullamco non pariatur aliquip occaecat excepteur aliquip. Nulla do veniam velit duis magna voluptate elit voluptate dolor et labore. Minim qui aliqua sit pariatur eu quis amet ipsum reprehenderit in officia excepteur. Dolor et proident id irure Lorem ex ex nisi cillum excepteur. Ad eiusmod minim proident laborum.

Non est deserunt eu non cupidatat id laborum id et. Exercitation et qui esse veniam. Cillum adipisicing id consectetur et reprehenderit magna. Minim consequat qui adipisicing occaecat adipisicing sint enim dolor cillum exercitation enim id. Do dolor in ea sit sit est nulla voluptate aliqua ad. Non proident ex minim irure officia voluptate. Duis dolore reprehenderit irure sit.

Veniam ullamco sunt magna reprehenderit aliquip Lorem id aliqua ut non consectetur elit. Velit enim fugiat fugiat culpa exercitation in cupidatat aliquip enim ullamco anim nisi consectetur. Exercitation laboris exercitation esse enim tempor laborum culpa officia eiusmod nisi mollit fugiat. Magna irure sit laborum deserunt anim Lorem nulla officia ad consectetur. Ex tempor nisi nulla do irure aute. Labore exercitation tempor irure adipisicing Lorem nulla pariatur elit Lorem sit. Irure duis nostrud ullamco occaecat laboris qui id.

Non duis ut consequat dolor ut cupidatat duis. Exercitation sit esse et eu. Est quis anim eu elit labore tempor pariatur incididunt duis do ipsum consectetur. Et laboris proident incididunt exercitation. Irure mollit enim non cupidatat non occaecat ea est adipisicing Lorem nostrud. Eu Lorem deserunt cillum ullamco sit anim est.

Occaecat occaecat fugiat sint sit velit sit proident. Laboris ullamco excepteur excepteur qui irure sit excepteur commodo ut occaecat. Sunt enim ad pariatur id irure ad cillum fugiat adipisicing voluptate. Laborum ex est minim Lorem duis ipsum.

Reprehenderit minim consectetur Lorem do incididunt voluptate. Qui aute eiusmod quis laboris occaecat nostrud. Mollit nostrud veniam est cillum tempor amet in enim et. Reprehenderit minim id et voluptate in dolore non adipisicing enim incididunt deserunt mollit et sunt. Fugiat deserunt veniam duis Lorem fugiat commodo duis esse commodo.
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
</Container>
    );
  }
}
export default App;
