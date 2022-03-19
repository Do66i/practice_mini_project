import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
// import zzanggu1 from './images/zzanggu1.jpeg'
// import zzanggu2 from './images/zzanggu2.jpeg'
// import zzanggu3 from './images/zzanggu3.jpeg'
import './App.css'
import Data from './data.js'
import Images from './images.js'
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [zzanggu, setZzanggu] = useState(Data);
  let [images, setImages] = useState(Images);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">굉장해 엄청나 짱구모음</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">태초마을</Nav.Link>
              <Nav.Link href="#link">링크?</Nav.Link>
              <NavDropdown title="추가메뉴" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">짱구 액션빔</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">또 다른 짱구</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">짱구 무언가</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='Jumbotron'>
        <div className='Jumbotron-string-div'>
          <h1>뿌앵!</h1>
          <p className='Jumbotron-first-p'>아무말대잔치</p>
          <p><button className='Jumbotron-btn'>🐘</button></p>
        </div>
      </div>


      <Route exact="/">
        <div>디스이즈 메인</div>
      </Route>
      <Route path="/detail">
        <div>디스이즈 디테일</div>
      </Route>
      { /* <Route path="/여기에경로명설정" component ={ 여기에컴포난트 }Route> */}


      <div className='container'>
        <div className='row'>
          {
            zzanggu.map((a, i) => {
              return <Card images={images[i]} zzanggu={zzanggu[i]} />
            })
          }
        </div>
      </div>

    </div >
  )
}


function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={props.images} width="50%"></img>
      <h4>{props.zzanggu.title}</h4>
      <p>{props.zzanggu.content} <br></br>
        귀여움수치 : {props.zzanggu.price}</p>
    </div>
  )
}

export default App
