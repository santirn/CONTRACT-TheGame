import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Button, Container, Navbar, Nav,  } from "react-bootstrap"


const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#PRE-REGISTER">PRE-REGISTER</Nav.Link>
              <Nav.Link href="#THEGAME">THEGAME</Nav.Link>
              <Nav.Link href="#WHITEPAPER">WHITEPAPER</Nav.Link>
              <Nav.Link href="#STAKING">STAKING</Nav.Link>
              <Nav.Link href="#CONNECT WALLET">CONNECT WALLET</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
