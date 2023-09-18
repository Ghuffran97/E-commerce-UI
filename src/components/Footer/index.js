import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import lock from '../../assets/lock.png'
import { StyledFooter } from './styled'

const Footer = () => {
  return (
    <StyledFooter>
      <Container className='d-flex justify-content-between'>

        <Row>
          <Col>
            <div className='d-flex gap-3 justify-content-center align-items-center'>
              <p>Copyright (c) 2023</p>
              <span>|</span>
              <p>Clarifionsupport@clarifion.com</p>
            </div>
          </Col>
        </Row>


        <Col>
          <div className='d-flex justify-content-center align-items-center gap-3'>
            <Image src={lock} fluid width={'16px'} height={'16px'} />
            <span>Secure 256-bit SSL encryption.</span>
          </div>
        </Col>
      </Container>
    </StyledFooter>
  )
}

export default Footer