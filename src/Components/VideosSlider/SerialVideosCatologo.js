import React, { useState } from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import './style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiFillPlayCircle, AiOutlineHeart } from 'react-icons/ai';
import { HiShare } from 'react-icons/hi'
import { BsPlusLg } from 'react-icons/bs';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function SerialVideosCatologo() {

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
    <Container className="serialVds" >
        <Container>
            <Stack direction="horizontal" gap={3}>
                <div  className="headingSrie">Trendings Videos</div>
                <Button  className="ms-auto mrBtn " variant="danger" >More Videos</Button>
            </Stack>
        </Container>
        <Container>
        <Carousel 
            draggable={false}
            autoPlay={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            autoPlaySpeed={3000}
            responsive={responsive}>
                {
                    items?.map(item=>(
                    <div className='slider__item__container'>
                        <div className='slider__item'>
                            <img
                                className="d-block sli__image__scale  w-100"
                                src={item?.videoimg}
                                alt="First slide"
                            />
                            <Stack className='slider__absCard'  direction="horizontal" gap={3}>
                                <AiOutlineHeart className='buttonsuserAct' />
                                <HiShare className='buttonsuserAct' />
                                <BsPlusLg className='buttonsuserAct' />
                            </Stack>
                        </div>
                        <div className='playButtonT' >
                            <AiFillPlayCircle />
                        </div>
                    </div>
                    ))
                }
        </Carousel>
        </Container>
    </Container>
  )
}

export default SerialVideosCatologo