import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1``

const Heading = ({content}) => {

   return (
      <StyledH1>
         {content}
      </StyledH1>
   )
}

export default Heading
