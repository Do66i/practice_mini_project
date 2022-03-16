import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { useState } from 'react'
import zzanggu1 from './images/zzanggu1.jpeg'
import zzanggu2 from './images/zzanggu2.jpeg'
import zzanggu3 from './images/zzanggu3.jpeg'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Do66i님의 어딘가 빵가진 가게</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={zzanggu1} width="50%"></img>
            <h4>짱구</h4>
            <p>짱구설명 & 귀여움수치</p>
          </div>
          <div className='col-md-4'>
            <img src={zzanggu2} width="50%"></img>
            <h4>짱구</h4>
            <p>짱구설명 & 귀여움수치</p>
          </div>
          <div className='col-md-4'>
            <img src={zzanggu3} width="50%"></img>
            <h4>짱구</h4>
            <p>짱구설명 & 귀여움수치</p>
          </div>
        </div>
      </div>

    </div >
  )
}

export default App
