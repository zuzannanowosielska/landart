import React from 'react';
import { Container, Row, Navbar } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageComponent } from './ImageComponent';
import a from './assets/1.jpg';
import b from './assets/2.jpg';
import c from './assets/3.jpg';
import d from './assets/4.jpg';
import { elements1 } from './elements1';
import { elements2 } from './elements2';
import { elements3 } from './elements3';
import { elements4 } from './elements4';

const App = () => {
  return (
    <Container fluid style={{ padding: 10, overflowX: 'hidden' /*  backgroundImage: `url(${background})`, backgroundSize: 'auto' */ }}>
      <Navbar bg="dark" fixed="top">
        <Navbar.Brand style={{ color: '#fff', padding: '20px 40px', width: '100%', textAlign: 'center', position: 'absolute' }}>
          Landart
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: '#fff', padding: '10px 20px', display: 'flex' }}>
            Created by:<p style={{ margin: 0, color: '#fff', textDecoration: 'underline' }}>Zuzanna Nowosielska</p>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Toggle />
      </Navbar>
      <div style={{ margin: '20px auto', padding: '50px 0 0 0', width: '60%' }}>
        <Row>
          <ImageComponent src={a} photos={elements1} label={'Label 1'} alt={''}></ImageComponent>
          <ImageComponent src={b} photos={elements2} label={'Label 2'} alt={''}></ImageComponent>
        </Row>
        <Row>
          <ImageComponent src={c} photos={elements3} label={'Label 3'} alt={''}></ImageComponent>
          <ImageComponent src={d} photos={elements4} label={'Label 4'} alt={''} video></ImageComponent>
        </Row>
      </div>
    </Container>
  );
};

export default App;
