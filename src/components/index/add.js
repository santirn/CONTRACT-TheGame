import React from 'react'
import { GatsbyImage  } from "gatsby-plugin-image"

const Add = ( {img} ) => {

    return (
        <div>
        <GatsbyImage image={img} alt="" className="w-100" />
        </div>

    )
}

export default Add
