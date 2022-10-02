import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/intheaters">In Theaters</Link>
            <Link className="nav-link" to="/comingsoon">Coming Soon</Link>
            <Link className="nav-link" to="/bestmovies">Top Movies</Link>
            <Link className="nav-link" to="/wanttosee">My List</Link>
            <Link className="nav-link" to="/watched">Watched</Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      )
  }
{/* const Header = () => {
    return (
      <>
          <ul>
              <li><Link to="/"/>Home</li>
              <li><Link to="/wanttosee"/>My List</li>
              <li><Link to="/watched"/>Watched</li>
              <li><Link to="/bestmovies"/>Top Movies</li>
              <li><Link to="/intheaters"/>In Theaters</li>
              <li><Link to="/comingsoon"/>Coming Soon</li>
          </ul>
      </>
    )
  } */}
  
  export default Header