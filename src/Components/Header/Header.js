import React, { useState } from 'react'
import './style.css'
import { Container, Row, Col, Stack, Button} from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'


function Header() {


    const [menus, setmenus] = useState([
        {
            name:'Home',
            path:'/',
        },
        {
            name:'Movies',
            path:'/',
        },
        {
            name:'Tv Shows',
            path:'/',
        },
        {
            name:'Video',
            path:'/',
        },
    ])

  return (
    <div className='stickyHeader'>
    <Container className='header__container' fluid="md">
    <Row>
        <Col className="logo" >
            <img src="http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/02/Logo-2.png" alt="" />
        </Col>
        <Col className='logo menuStack'  >
            <Stack className="" direction="horizontal" gap={3}>
                {
                    menus?.map((menu)=>(
                        <a className="menuItems">{menu.name}</a>
                    ))
                }
            </Stack>
        </Col>
        <Col className="thirdpard"  >
            <Stack direction="horizontal" gap={3}>
                <AiOutlineSearch className=' buttonsh icons' />
                <div className='dangerIconButtons buttonsh' ><FaUser /></div>
                <div className='dangerButton buttonsh' variant="danger">SUBSCRIBE</div>
                <div className='MenuIcons icons' ><FiMenu style={{fontSize:"1.5rem",cursor:'pointer'}} /></div>
            </Stack>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Header