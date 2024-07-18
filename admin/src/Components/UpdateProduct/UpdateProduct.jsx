import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {
  let { id } = useParams();
  return (
    <div>
      id{ id }
      hy

    </div>
  )
}

export default UpdateProduct