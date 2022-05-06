import React from 'react'
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import { Col } from 'react-bootstrap'

const Contract = ( { node }) => {
    return (
        <>
        <Col xs={12} md={6} lg={4} className="p-2 box" >
            <div className="w-85 mx-auto p-3">
                <GatsbyImage image={getImage(node.frontmatter.contractImg)} alt="" className="w-100" />
                
                    <h4 to="#" className="text-center stretched-link">
                        {node.frontmatter.name}
                    </h4>
                
            </div>
        </Col>
        </>
    )
}

export default Contract
