import React, { useState } from 'react'
import { Carousel, Stack, } from 'react-bootstrap'
import { BsPlayCircleFill } from 'react-icons/bs'
import { BsFillEyeFill } from 'react-icons/bs'
import './style.css'


function CarouselCom() {

  const [items, setitems] = useState([
    {
      title:'Bigfoot Silva',
      releaseTime:'3',
      Views:241,
      categhory:'Action',
      paragraph:'Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout.',
      videoimg:'http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2019/02/31.jpg',
      videoUrl:'',
    },
    {
      title:'Bigfoot Silva',
      releaseTime:'2',
      Views:241,
      categhory:'Action',
      paragraph:'Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout.',
      videoimg:'http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/02/1-2.jpg',
      videoUrl:'',
    },
    {
      title:'Bigfoot Silva',
      releaseTime:'53',
      Views:241,
      categhory:'Action',
      paragraph:'Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout.',
      videoimg:'http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/01/4-1.jpg',
      videoUrl:'',
    }
  ])


  return (
    <div>
    <Carousel style={{height:'100vh'}} className='' >
      {
        items?.map(item=>(
        <Carousel.Item className='image__height' >
          <img
            className="d-block  w-100"
            src={item.videoimg}
            alt="First slide"
          />
          <Carousel.Caption className='carouselCapton' >
            <div className='playButton' >
              <BsPlayCircleFill style={{fontSize:"4rem",marginRight:"8px"}} />
              Watch Trailor</div>
              <div className="vidDtlsStack" >
                <Stack  direction="horizontal" gap={3}>
                    <div>{item.releaseTime} years</div>
                    <div className='cataghory'>{item.categhory}</div>
                    <div className='watchDtls' ><BsFillEyeFill /><span > 0 views</span></div>
                </Stack>
              </div>
            <h3 style={{fontSize:"3rem"}}>{item.title}</h3>
            <p>{item.paragraph}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))
      }
    </Carousel>
    </div>
  )
}

export default CarouselCom;

