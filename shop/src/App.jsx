import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import axios from 'axios';
import './App.css'
import Data from './data.js'
import Images from './images.js'
import Card from './component/Card.jsx'
import Detail from './component/Detail.jsx'
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [zzanggu, setZzanggu] = useState(Data);
  let [images, setImages] = useState(Images);
  let [data, setData] = useState([10, 11, 12])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">굉장해 엄청나 짱구모음</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/" style={{ textDecoration: 'none' }}>태초마을</Link></Nav.Link>
              <Nav.Link><Link to="/detail" style={{ textDecoration: 'none' }}>아직미정임</Link></Nav.Link>
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
      </Navbar >
      <div className='Jumbotron'>
        <div className='Jumbotron-string-div'>
          <h1>뿌앵!</h1>
          <p className='Jumbotron-first-p'>아무말대잔치</p>
          <p><button className='Jumbotron-btn'>🐘</button></p>
        </div>
      </div>


      <Route exact path="/">
        <div className='container'>
          <div className='row'>
            {
              zzanggu.map((a, i) => {
                return <Card images={images[i]} zzanggu={zzanggu[i]} />
              })
            }
          </div>
          <button className="btn btn-primary">더보기</button>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail images={images} zzanggu={zzanggu} data={data} setData={setData} />
        {console.log("아아악 깃농사 아아악 라우터53 (us-east 1에 인증서있어야함) -> 도메인 구입 (실습때 좋음 걍 싼거쓰면됨)")}
      </Route>

    </div >
  )
}

export default App
