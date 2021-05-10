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
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand style={{ color: '#fff', padding: '20px 40px', width: '100%', textAlign: 'center' }}>
          <h3 style={{ padding: 0, margin: 0 }}>Landart</h3>
          <h5 style={{ padding: 0, margin: 0, fontSize: '0.8em', display: 'flex', justifyContent: 'center' }}>
            Created by: <div style={{ textDecoration: 'underline', paddingLeft: '3px' }}>Zuzanna Nowosielska</div>
          </h5>
        </Navbar.Brand>
        {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: '#fff', padding: '10px 20px', display: 'flex' }}>
            Created by:<p style={{ margin: 0, color: '#fff', textDecoration: 'underline' }}>Zuzanna Nowosielska</p>
          </Navbar.Text>
        </Navbar.Collapse> */}
        <Navbar.Toggle />
      </Navbar>
      <div className="rowClass">
        <Row>
          <ImageComponent src={a} photos={elements1} label={'Untitled, 2021, cardboard physical model'} alt={''}></ImageComponent>
          <ImageComponent src={b} photos={elements2} label={'City’s protagonists, 2021, photographs'} alt={''}></ImageComponent>
        </Row>
        <Row>
          <ImageComponent src={c} photos={elements3} label={'Plastic, 2021, photographs'} alt={''}></ImageComponent>
          <ImageComponent
            src={d}
            photos={elements4}
            label={'The Trash Ball Cycle, 2021, video and photographs'}
            alt={''}
            video
          ></ImageComponent>
        </Row>
      </div>
    </Container>
  );
};

export default App;

// 1. Untitled, 2021, cardboard physical model
// 2. City’s protagonists, 2021, photographs
// 3. Plastic, 2021, photographs
// 4. The Trash Ball Cycle, 2021, video and photographs
