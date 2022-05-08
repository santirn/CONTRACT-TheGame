import * as React from "react"
import { graphql } from "gatsby"

import { GatsbyImage  } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Contract from "../components/index/contracts"
import Add from "../components/index/add"



const IndexPage = ({ data }) => {

  //Get image in query matching filename e.j. "1r2.png"
  function findImage(fileName) {
    var edge = data.imageQuery.edges.find(edge => {return edge.node.base === fileName})
    return edge.node.childImageSharp.gatsbyImageData
  }

  return(
    <Layout className="fontAirbnbCerealMedium">
      <Seo title="Home" />
      {/*<div className="position-relative overflow-hidden imgheader"  >
          <GatsbyImage  image={findImage("1r2.png") } alt="" className="position-absolute top-50 start-50 translate-middle w-100 "/>
      </div >*/}
      <Container fluid className="px-0 "> 
      
        <Row className="justify-content-center ">
          <Col xl={12} >
            <Add img={findImage("Banner.png")}/>
          </Col>
        </Row>

        {/* Welcome and email notification */ }
        <Row className="justify-content-center p-5  ">
          <Col xs={6} className="card p-4">
            <Row >
              <Col    md={8 }sm={12} className="fontAirbnbCerealLight">
                <h2>WELCOME <span className="px-2 fs-5"> TO </span><span className="fontAirbnbCerealBold">CONTRACT</span></h2>
                <br/>
                <p className="fs-4">Enter your email to get notified on new <strong>bundles</strong>.</p>
                <br/>
                <Form className="">
                  <Form.Group className="mb-3" controlId="formBasicEmailm" className="" >
                    <Form.Control type="email" placeholder="Enter email" className="email mb-2 "/>
                      <Form.Text className="cardtext">
                        We'll never share your email with anyone else. 
                      </Form.Text>
                  </Form.Group>
                  <div className="text-center">
                    <Button variant="warning" type="submit" className="fontAirbnbCerealBold text-white text-center fs-5 px-4 py-1 mt-1 border-0 cardbutton" >
                      JOIN
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col     sm={12} md={4}>
                <div className="mx-auto p-3 ">
                { /* */}
                <GatsbyImage image={findImage("mosaic.jpg")} alt=""  className="w-100"/>
                </div>
              </Col>  
            </Row>
          </Col>
        </Row>
        
        {/* CONTRACTS EXPO */ }
        <Row className="justify-content-center mx-auto mt-0 pt-0">
          <Col xs={12} md={8}>
            <Row>
                <h2 className="text-center pt-4 pb-3">Get Your Unique Dream Car NFT</h2>
                {
                  data.contractsQuery.edges.map(({node}) => {
                    return(
                      <Contract node={node} ></Contract>
                    )
                  })
                }
            </Row>
          </Col>
        </Row>

        {/* SOCIAL */ }
        <Row className="justify-content-center ">
          <Col xl={12} >
            <Add img={findImage("Vulvan_Web.png")}/>
          </Col>
        </Row>
        <Row >
          <Col lg={12} className="mt-3 text-center">
                <h2>TRADE YOUR CARS</h2>
          </Col>
        </Row>
        <Row className="justify-content-center box mb-5 pb-4">
          <Col xl={7}>
            <Row className="mt-4">
                <Col className="">
                    <div className="w-50 mx-auto mt-4">
                    <Add img={findImage("chain.png") }/>
                    </div>
                </Col>
                <Col className="fs-5">

                  <h3 className="fontAirbnbCerealMedium">COMMUNITY MARKETPLACE</h3>
                  <br />
                  <p className="fontAirbnbCerealMedium">Connect your NFT wallet and start {' '} 
                    <span className="fontAirbnbCerealBold">
                      selling/buying/exchanging
                    </span> 
                    {' '} your contracts</p>
                  <div className="fontAirbnbCerealMedium px-3">
                    <p className="mb-1 text-xl-start "> - Secure Blockchain Transactions</p>
                    <p className="mb-1 text-xl-start"> - Discord Channel</p>
                    <p className="mb-1 text-xl-start">- Live Chat Support</p>
                  </div>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    # 
    # 1. Get all imagenes from filtered folder name
    #
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
    contractsQuery : allMarkdownRemark(filter: {frontmatter: {pageCategory: {eq: "contract"}}}) {
      edges {
        node {
          frontmatter {
            contractImg {
              childImageSharp {
                gatsbyImageData(blurredOptions: {width: 100}, placeholder: BLURRED)
              }
            }
            name
            contractLink
          }
        }
      }
    }
  }
   
  
`

/*
 Get all imagenes from filtered folder name
    #
    allMarkdownRemark(filter: {frontmatter: {pageCategory: {eq: "index"}}}) {
      edges {
        node {
          frontmatter {
            photo01 {
              childImageSharp {
                gatsbyImageData(blurredOptions: {width: 100}, placeholder: BLURRED)
              }
            }
            photo03 {
              childImageSharp {
                gatsbyImageData(blurredOptions: {width: 100}, placeholder: BLURRED)
              }
            }
            photo02 {
              childImageSharp {
                gatsbyImageData(blurredOptions: {width: 100}, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
*/