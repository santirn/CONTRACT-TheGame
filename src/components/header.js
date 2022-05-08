import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Button, Container, Navbar, Nav, Row, Col  } from "react-bootstrap"
import { graphql,useStaticQuery } from "gatsby"
import { GatsbyImage  } from "gatsby-plugin-image"






const Header = ({ title }) => {

  const data = useStaticQuery(graphql`
  query {
    imageQuery : allFile(
      filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "index"}}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              blurredOptions: {toFormat: WEBP}
              webpOptions: {quality: 100}
            )
          }
          base
        }
      }
    },

    # 
    # 2. Get Mardown content filtering by frontmatter value
    #
  }
   
  
`)

  function findImage(fileName) {
    var edge = data.imageQuery.edges.find(edge => {return edge.node.base === fileName})
    console.log(edge)
    return edge.node.childImageSharp.gatsbyImageData
  }
  return (
  
  <header>

    <div>

      <Navbar collapseOnSelect expand="lg" className="px-5 bg-black " variant="dark">
        <div className="logo mx-3">
            <GatsbyImage image={findImage("Logo_web.png")} alt="logo" className=" w-100 logoflex"/>
        </div>
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 d-block text-light">
              <Row className="fontAirbnbCerealBold text-nowrap">
                <Col></Col>
                <Col>PRE-REGISTER</Col>
                <Col>THE GAME</Col>
                <Col>WHITEPAPER</Col>
                <Col>STAKING</Col>
                <Col><span className="connectwallet p-2">Connect Wallet</span></Col>

              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </header>
)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



  