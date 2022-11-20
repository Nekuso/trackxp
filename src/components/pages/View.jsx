import React from 'react'
import { useParams } from 'react-router-dom';
import { StyledView } from '../../styles/View.styled'

const View = () => {
    const { orderId } = useParams();

  return (
    <StyledView>
        View
    </StyledView>
  )
}

export default View