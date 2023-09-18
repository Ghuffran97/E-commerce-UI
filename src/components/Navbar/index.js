import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import logoMobile from '../../assets/logoMobile.png'
import mobileMacfee from '../../assets/mobileMacfee.png'
import mobileNorton from '../../assets/mobileNorton.png'


import p1 from '../../assets/norton-antivirus-logo 1.png'
import p2 from '../../assets/Frame 1484578055.png'
import { Wrapper } from './styled'
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Adjust the breakpoint as needed

  return (
    <Wrapper>
      <Container className='d-flex justify-content-between align-items-center p-3 w-100'>
        <div>
          <Image src={isMobile ? logoMobile : logo} fluid />

        </div>

        <div className='d-flex gap-5'>
          <Image src={isMobile ? mobileMacfee : p2} fluid />
          <Image src={isMobile ? mobileNorton : p1} fluid />
        </div>
      </Container>
    </Wrapper>
  )
}

export default Navbar